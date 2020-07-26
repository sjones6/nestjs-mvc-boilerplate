import { Controller, Get } from '@nestjs/common';
import { Render } from 'nest-jsx-template-engine';
import { AppService } from './app.service';
import { Hello, IHelloProps } from './hello.view';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render<IHelloProps>(Hello)
  getHello(): Partial<IHelloProps> {
    return {
      name: this.appService.getHello()
    }
  }
}
