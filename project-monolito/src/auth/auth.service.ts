import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/create-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ){}

  async login({email, password}: AuthDto){
    const user = await this.usersService.findByEmail(email);

    if(!user){
      throw new UnauthorizedException('Credenciales incorrectas')
    }

    const PasswordValid = await bcrypt.compare(password, user.password);
    if(!PasswordValid){
      throw new UnauthorizedException('Credenciales incorrectas')
    }

    const payload = { email: user.email, sub: user.id};

    const token = await this.jwtService.signAsync(payload);

    return{
      token, 
      email,
    };
  }

  async register({email, password}: AuthDto) {
    const user = await this.usersService.findByEmail(email);

    if( user ){
      throw new UnauthorizedException('Usuario ya existe')
    }

    return this.usersService.create({
      email, 
      password: await bcrypt.hash(password, 10)
    })

  }
}
