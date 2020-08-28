import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import {
  IExceptionData,
  Generic,
  NotFound,
  Forbidden,
} from './exception.views';
import { ViewMiddleware } from 'src/middlewares/view.middleware';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly viewMiddleware: ViewMiddleware) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const data = {
      exception,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url,
    } as IExceptionData;

    switch (req.accepts('html', 'json')) {
      case 'html':
        let template;
        switch (status) {
          case 403:
            req.flash('error', 'You are not permitted to perform that action.');
            template = Forbidden;
            break;
          case 404:
            template = NotFound;
            break;
          default:
            req.flash('error', "Uh oh! We've encountered a problem.");
            template = Generic;
        }
        res
          .status(status)
          .send(this.viewMiddleware.renderTemplate(template, data, req, res));
        break;
      case 'json':
        res.status(status).json({
          status,
          timestamp: data.timestamp,
          path: data.path,
        });
        break;
      default:
        res.status(status).send('ERROR');
    }
  }
}
