import 'module-alias/register';
import { join } from 'path';
import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CsrfGuard } from './guards/csrf.guard';
import cookieParser from 'cookie-parser';
import { urlencoded } from 'body-parser';
import helmet from 'helmet';
import session from 'express-session';
import flash from 'connect-flash'
import sqlite3 from 'sqlite3';
import sqliteStoreFactory from 'express-session-sqlite';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { ViewMiddleware } from './middlewares/view.middleware';

// reads .env file
config();

const DB_PATH = join(__dirname, '..', 'data', process.env.DB_NAME || 'app.sqlite');

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  const SqliteStore = sqliteStoreFactory(session);
  app.use(session({
    secret: process.env.SESSION_SECRET || 'nest keyboard cat',
    store: new SqliteStore({
      driver: sqlite3.Database,
      path: DB_PATH,
      ttl: 1000 * 60 * 60 * 24, // 1 day in MS
      cleanupInterval: 300000 // 5 mins
    }),
    resave: false,
    saveUninitialized: false,
  }));
  app.use(flash());
  app.use(cookieParser());
  app.use(urlencoded({ extended: false }));

  // protects non-GET routes from CSRF attack vectors
  app.useGlobalGuards(new CsrfGuard());

  // shows user-friendly messages
  app.useGlobalFilters(new HttpExceptionFilter(new ViewMiddleware()));
  return app;
}
