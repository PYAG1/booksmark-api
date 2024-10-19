import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDto, EditDto } from './dto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class BookMarkService {
  constructor(private prisma: PrismaService) {}
  async getBookMarks(userid: number) {
    const bookmarks =
      await this.prisma.bookmark.findMany({
        where: { userId: userid },
      });

    return bookmarks;
  }

  async createBookMark(
    dto: CreateDto,
    user: User,
  ) {
    const bookmark =
      await this.prisma.bookmark.create({
        data: {
          ...dto,
          userId: user.id,
        },
      });

    return {
      message: 'Bookmark created successfully',
      bookmark,
    };
  }
  async editBookMark(
    dto: EditDto,
    userId: number,
  ) {
    const bookmark =
      await this.prisma.bookmark.update({
        where: {
          id: dto.bookmarkid,
          userId: userId,
        },
        data: {
          title: dto.title,
          description: dto.description,
          link: dto.link,
        },
      });
      
    return {
      message: 'Bookmark edited successfully',
      ...bookmark,
    };
  }

  async deleteBookMark(bookmarkId: number, userId: number) {
    const bookMark = await this.prisma.bookmark.delete({
 where:{id:bookmarkId,userId:userId},
 
    });

    return {
        message: "Bookmark deleted successfully",
      bookMark
    };
}


  async getBookMarkById(
    bookmarkid: number,
    user: User,
  ) {

    const bookmark = await this.prisma.bookmark.findFirst({
        where:{id:bookmarkid,userId:user.id}
    })

return {
    ...bookmark
}
  }
}
