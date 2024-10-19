import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserController } from './user.controller';
import { UserServices } from "./user.service";
@Module({
    imports:[JwtModule],
    controllers: [UserController],
    providers:[UserServices]
   
})
export class UserModules {}