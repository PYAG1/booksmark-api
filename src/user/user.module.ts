import { Module } from "@nestjs/common";
import { UserController } from './user.controller';
import { AuthGuard } from "src/auth/verifyJwt";
import { JwtModule } from "@nestjs/jwt";
@Module({
    imports:[JwtModule],
    controllers: [UserController],
   
})
export class UserModules {}