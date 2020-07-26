import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import csrf from 'csurf';

@Injectable()
export class CsrfMiddleware implements NestMiddleware {
  private csrf: Function
  constructor() {

    // for options, see: https://www.npmjs.com/package/csurf#options
    this.csrf = csrf({
      cookie: true
    })
   }
  use(req: Request, res: Response, next: Function) {
    if (req.url.startsWith('/api')) {
      return next()
    }
    return this.csrf(req, res, next)
  }
}
