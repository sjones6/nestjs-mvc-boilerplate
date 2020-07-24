import 'module-alias/register';
import { join } from 'path';
import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CsrfGuard } from './guards/csrf.guard';
import * as cookieParser from 'cookie-parser';
import { urlencoded } from 'body-parser';
import * as helmet from 'helmet';
import * as session from 'express-session';
import * as flash from 'connect-flash'
import * as sqlite3 from 'sqlite3';
import sqliteStoreFactory from 'express-session-sqlite';

// reads .env file
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  const SqliteStore = sqliteStoreFactory(session);
  app.use(session({
    secret: process.env.SESSION_SECRET || 'nest keyboard cat',
    store: new SqliteStore({
      driver: sqlite3.Database,
      path: join(__dirname, '..', 'data', 'app.sqlite'),
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

  await app.listen(3000);
}
bootstrap();
