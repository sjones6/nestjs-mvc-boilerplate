import { HttpStatus, HttpException } from '@nestjs/common';

export class CsrfException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}
