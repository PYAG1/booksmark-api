import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/verifyJwt";
import { BookMarkService } from "./bookmark.service";
import { CreateDto, deleteDto, EditDto } from "./dto";
import { User } from "@prisma/client";
import { GetUser } from "src/auth/decorator/getUserDecorator";

@UseGuards(AuthGuard)
@Controller('bookmark')


export class BookMarkController{
constructor( private bookmarkService:BookMarkService){}

@Delete('delete')
deleteBookMark(@Body() dto:deleteDto,@GetUser() user:User){
    return this.bookmarkService.deleteBookMark(dto.bookmarkid,user.id)
}

@Post('create')
createBookmark(@Body() dto:CreateDto,@GetUser() user:User){
return this.bookmarkService.createBookMark(dto,user)
}

@Get('all')
getAllBookMarks(@GetUser() user:User){
    return this.bookmarkService.getBookMarks(user.id)
}

@Get(':id')
getSingleBookMark(@Param('id',ParseIntPipe) bookmarkid:number,@GetUser() user:User){
    return this.bookmarkService.getBookMarkById(bookmarkid,user)
}

@Patch('edit')
editBookmark(@Body() dto:EditDto,@GetUser() user:User){
    return this.bookmarkService.editBookMark(dto,user.id)
}



}