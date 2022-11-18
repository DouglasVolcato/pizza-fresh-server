import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const makeSut = () => {
  const appService = new AppService();
  return new AppController(appService);
};

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('AppController', () => {
    it('getAppStatus should return a message', () => {
      const sut = makeSut();
      const message = sut.getAppStatus();
      expect(message).toBe(
        'Server is running! Please check http://localhost:3333/api for swagger docs',
      );
    });
  });
});
