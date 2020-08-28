import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import csrf from 'csurf';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UserSessionMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}
  use(req: Request, res: Response, next: Function) {
    if (req.session && req.session.user_id) {
      this.usersService
        .findById(req.session.user_id)
        .then((user) => {
          req.user = user;
          next();
        })
        .catch((err) => next(err));
    } else {
      next();
    }
  }
}
