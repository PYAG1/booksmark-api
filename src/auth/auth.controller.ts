import { Body, Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { AuthServices } from './auth.service';
import { get } from 'https';
import { AuthDto, SignInDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthServices) {}
  @HttpCode(HttpStatus.OK)
  @Post('/signUp')
  signUp(@Body() dto: AuthDto) {
    // you pass in the request body into thr function
    console.log(dto.email, dto.password);

    return this.authService.signUp(dto);
  }
  @HttpCode(HttpStatus.OK)
  @Post('/signIn')
  signIn(@Body () dto: SignInDto) {
    return this.authService.signIn(dto);
  }
}
  