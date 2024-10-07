import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthServices } from './auth.service';
import { get } from 'https';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthServices) {}
  @Post('/signUp')
  signUp(@Body() dto: AuthDto) {
    // you pass in the request body into thr function
    console.log(dto.email, dto.password);

    return this.authService.signUp();
  }
  @Post('/signIn')
  signIn() {
    return this.authService.signIn();
  }
}
