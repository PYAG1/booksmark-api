import {
  Controller,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, SignInDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { error } from 'console';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthServices {
  constructor(
    private prismaModule: PrismaService,
  private jwtService:JwtService,
  private config:ConfigService
  ) {}
  async signUp(dto: AuthDto) {
    try {
      const hash = await argon.hash(dto.password);

      const user =
        await this.prismaModule.user.create({
          data: {
            email: dto.email,
            firstName: dto.firstName,
            lastName: dto.lastName,
            passwordHash: hash,
          },
        });
      delete user.passwordHash;
      return user;
    } catch (error) {
      if (
        error instanceof
        PrismaClientKnownRequestError
      ) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Credentials taken',
          );
        }
      }
    }
    throw error;
  }
  
  async signIn(dto: SignInDto) {
    const user =
      await this.prismaModule.user.findFirst({
        where: { email: dto.email },
      });
    if (!user) {
      throw new ForbiddenException(
        'Credentials Incorrect',
      );
    }
    const match = await argon.verify(
      user.passwordHash,
      dto.password,
    );
    if (!match) {
      throw new ForbiddenException(
        'Credentials Incorrect',
      );
    }
const token = (await this.signToken(user.id,user.email))
delete user.passwordHash
return {
  user,
  token
}
    
  }
 async signToken(userId:any,email:string):Promise<string>{
  const payload = {sub:userId,email:email}



 const  access_token= await this.jwtService.signAsync(payload,{expiresIn:'15m',secret:this.config.get("ACCESS_TOKEN_SECRET")})
return access_token
 }
}
