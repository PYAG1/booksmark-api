import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModules } from './auth/auth.module';
import { BookMarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModules } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    AuthModules,UserModules,BookMarkModule, PrismaModule],
    exports:[AppModule]

})
export class AppModule {}
