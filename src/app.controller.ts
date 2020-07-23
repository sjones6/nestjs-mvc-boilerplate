import { Controller, Get } from '@nestjs/common';
import { Render } from 'nest-jsx-template-engine';
import { AppService } from './app.service';
import { Hello } from './hello.view';
import { IHelloViewDTO } from './hello.view.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render(Hello)
  getHello(): IHelloViewDTO {
    return {
      name: this.appService.getHello()
    }
  }
}
