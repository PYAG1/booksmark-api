import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthServices } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import {
  JwtModule,
  JwtService,
} from '@nestjs/jwt';
import { AuthGuard } from './verifyJwt';
@Module({
  imports: [PrismaModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthServices,AuthGuard],
  exports:[AuthGuard]
})
export class AuthModules {}
