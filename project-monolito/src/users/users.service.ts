import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}
  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    if(!user){
      return 'Error al crear usuario';
    }
    return this.userRepository.save(user);
  }

  async findByEmail(email: string){
    return await this.userRepository.findOneBy({ email });
  }

}
