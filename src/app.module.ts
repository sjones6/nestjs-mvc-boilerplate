import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CsrfMiddleware } from './middlewares/csrf.middleware';
import { ViewMiddleware } from './middlewares/view.middleware';
import { UserSessionMiddleware } from './middlewares/user-session.middleware';
import { User } from './users/user.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./data/app.sqlite",
      entities: [
        User
      ],
      migrationsTableName: "_migrations",
      migrations: ["dist/migrations/*.js"],
      cli: {
          "migrationsDir": "migration"
      },
      synchronize: true,
      logging: false,
      keepConnectionAlive: true
    }), // see ormconfig.ts for config options
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        UserSessionMiddleware, // resolves req.user from session
        CsrfMiddleware, // decorates request with a csrfToken() method
        ViewMiddleware // decorates res.locals with values for template rendering
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
