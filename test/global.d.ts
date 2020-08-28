import { INestApplication } from '@nestjs/common';

declare global {
  namespace NodeJS {
    interface Global {
      app: INestApplication;
    }
  }
}
