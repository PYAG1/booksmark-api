import {
    Body,
  Controller,
  Get,
  Put,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/getUserDecorator';
import { AuthGuard } from '../auth/verifyJwt';
import { UserServices } from './user.service';
import { EditUser } from './dto';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {

constructor(private userService:UserServices){}
  @Get('test')
  getUser(@GetUser() user: User) {
    const payload = user;

    return {
      ...payload,
    };
  }

  @Put('/edit')
  editUser(@Body() dto:EditUser,@GetUser() user:User){
return this.userService.editUser(dto,user)
  }
}

