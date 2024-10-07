import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Global()// allows all modules to access this servie make sure it is imported into root
@Module({
  providers: [PrismaService],
  exports:[PrismaService]
})
export class PrismaModule {}
