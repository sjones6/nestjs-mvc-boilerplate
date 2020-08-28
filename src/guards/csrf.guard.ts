import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';
import csrf from 'csurf';
import { CsrfException } from 'src/exceptions/CsrfException';

@Injectable()
export class CsrfGuard implements CanActivate {
  private csrf: Function;

  constructor() {
    this.csrf = csrf({
      cookie: true,
    });
  }

  async canActivate(context: ExecutionContext) {
    const http = context.switchToHttp();
    const req = http.getRequest();
    if (req.url.startsWith('/api')) {
      return true;
    }
    await new Promise((resolve, reject) => {
      this.csrf(req, http.getResponse(), err => {
        err ? reject(new CsrfException()) : resolve();
      });
    });
    return true;
  }
}
