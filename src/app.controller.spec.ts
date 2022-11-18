import { AppController } from './app.controller';
import { AppService } from './app.service';

const makeSut = () => {
  const appService = new AppService();
  return new AppController(appService);
};

describe('AppController', () => {
  it('getAppStatus should return a message', () => {
    const sut = makeSut();
    const message = sut.getAppStatus();
    expect(message).toBe(
      'Server is running! Please check http://localhost:3333/api for swagger docs',
    );
  });
});
