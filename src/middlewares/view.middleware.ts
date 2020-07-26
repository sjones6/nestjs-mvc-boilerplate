import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from 'src/users/user.entity';
import { App } from 'src/interfaces/render';

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
    res.locals = res.locals || {};
    const oRender = res.render.bind(res);
    const createRenderDecoration = this.createResDecoration.bind(this, req, res);
    res.render = function(template, opt) {
      this.locals = Object.assign(this.locals, createRenderDecoration(), this.locals) as Partial<App.RenderProps>;
      return oRender(template, opt);
    }.bind(res);
    
    next();
  }
  createResDecoration(req: Request, res: Response): Partial<App.RenderProps> {
    return {
      $old: req.body || {},
      $session: {
        user: req.user as User,
        csrfToken: req.csrfToken(),
        messages: this.getMessages(req)
      }
    }
  }
  getMessages(req: Request) {
    return {
      info: req.flash('info') || [],
      success: req.flash('success') || [],
      error: req.flash('error') || []
    }
  }
}
