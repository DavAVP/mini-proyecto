import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('register')
  register(
    @Body() 
    auth: AuthDto,
  ){
    return this.authService.register(auth)
  }

  @Post('login')
  login(
    @Body() 
    auth: AuthDto,
  ){
    return this.authService.login(auth);
  }


}
