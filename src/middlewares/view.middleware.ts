import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from 'src/users/user.entity';

// TODO: move
declare global {
  namespace Express {
    export interface Request {
      csrfToken(): string
      user: User
    }
  }
}

@Injectable()
export class ViewMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    res.locals.csrfToken = req.csrfToken();
    res.locals.$old = req.body || {};
    next();
  }
}
