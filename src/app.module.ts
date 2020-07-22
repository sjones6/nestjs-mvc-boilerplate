import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(), // see ormconfig.ts for config options
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
