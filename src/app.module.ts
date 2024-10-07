import { Module } from '@nestjs/common';
import { AuthModules } from './auth/auth.module';
import { UserModules } from './user/user.module';
import { BookMarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [AuthModules,UserModules,BookMarkModule, PrismaModule]

})
export class AppModule {}
