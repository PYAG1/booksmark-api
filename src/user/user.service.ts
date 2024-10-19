import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUser } from './dto';
import { User } from '@prisma/client';

@Injectable()
export class UserServices {
  constructor(
    private prismaModule: PrismaService,
  ) {}

  async editUser(dto: EditUser, user: User) {
    const editUser =
      await this.prismaModule.user.update({
        where: { id: user.id },
        data: {
          ...dto,
        },
      });
    delete user.passwordHash;
    return {
      message: 'User edit successfully',
      editUser,
    };
  }
}
