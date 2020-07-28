import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { expect } from 'chai';
import { before, after } from 'mocha';

describe('AppController', () => {
  let appController: AppController;
  let app: TestingModule;

  before(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).to.deep.equal({ name: 'Hello World!' });
    });
  });
});
