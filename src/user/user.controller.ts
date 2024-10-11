import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/verifyJwt';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator/getUserDecorator';
import { User } from '@prisma/client';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {

 @Get('test')
 getUser(@GetUser() user:User){
   
const payload = user

    return {
    ...payload  
    }
 }
}
