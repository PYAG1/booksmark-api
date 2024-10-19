import {
    Body,
    Controller,
    Get,
    Patch,
    UseGuards
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/getUserDecorator';
import { AuthGuard } from '../auth/verifyJwt';
import { EditUser } from './dto';
import { UserServices } from './user.service';

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

@Patch('/edit')
  editUser(@Body() dto:EditUser,@GetUser() user:User){
return this.userService.editUser(dto,user)
  }
}

