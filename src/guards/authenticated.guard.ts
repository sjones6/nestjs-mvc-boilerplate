import { ExecutionContext, Injectable, CanActivate, ForbiddenException } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {  
  async canActivate(context: ExecutionContext) {
    const http = context.switchToHttp();
    const req = http.getRequest();
    if (!req.user) {
      throw new ForbiddenException('forbidden');
    }
    return true
  }
}