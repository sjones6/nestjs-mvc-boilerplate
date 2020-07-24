import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RenderMiddleware } from 'nest-jsx-template-engine';
import { AuthModule } from './auth/auth.module';
import { CsrfMiddleware } from './middlewares/csrf.middleware';
import { ViewMiddleware } from './middlewares/view.middleware';
import { UserSessionMiddleware } from './middlewares/user-session.middleware';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(), // see ormconfig.ts for config options
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
        RenderMiddleware, // handles JSX-based view rendering
        CsrfMiddleware, // decorates request with a csrfToken() method
        ViewMiddleware // decorates res.locals with values for template rendering
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
