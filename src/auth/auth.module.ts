import { Module } from '@nestjs/common';
import {
    JwtModule
} from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthServices } from './auth.service';
import { AuthGuard } from './verifyJwt';
@Module({
  imports: [PrismaModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthServices,AuthGuard],
  exports:[AuthGuard]
})
export class AuthModules {}
