import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { ConfigService } from '@nestjs/config';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
import { PrismaService } from '../../prisma/prisma.service';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService, private config: ConfigService,private prismaModule:PrismaService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest<Request>();
      const token = this.extractTokenFromHeader(request);
  
      if (!token) {
        throw new UnauthorizedException('Token not found');
      }
  
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
        });
       const user = await this.prismaModule.user.findFirst({
            where:{email:payload?.email}      
        });
    delete user.passwordHash
        // Assign the payload to the request object to access it later in route handlers
        request['user'] = user
  
        // If you need to log or debug the payload
        console.log('Payload:', payload);
      } catch (error) {
        throw new UnauthorizedException('Invalid token');
      }
  
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }
  