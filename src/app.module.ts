import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RenderMiddleware } from 'nest-jsx-template-engine';

@Module({
  imports: [
    TypeOrmModule.forRoot(), // see ormconfig.ts for config options
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RenderMiddleware)
      .forRoutes('*');
  }
}
