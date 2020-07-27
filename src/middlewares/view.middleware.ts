import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from 'src/users/user.entity';
import { App } from 'src/interfaces/render';
import { RenderMiddleware } from 'nest-jsx-template-engine';

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
export class ViewMiddleware extends RenderMiddleware implements NestMiddleware {
  decorateRenderProps(req: Request, res: Response): Partial<App.RenderProps> {
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
