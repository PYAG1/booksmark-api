import { Controller, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthServices {
    constructor(private prismaModule:PrismaService){}
  signUp() {
    return 'I am a boy';
  }
  signIn() {
    return 'I am a girl';
  }
}
