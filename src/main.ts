import { config } from 'dotenv'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// reads .env file
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
