import { Module } from "@nestjs/common";
import { BookMarkService } from "./bookmark.service";
import { BookMarkController } from "./bookmark.controller";
import { AuthGuard } from "src/auth/verifyJwt";
import { JwtModule } from "@nestjs/jwt";
@Module({
    imports:[JwtModule],
   controllers:[BookMarkController],
    providers:[BookMarkService,AuthGuard]
})
export class BookMarkModule {}