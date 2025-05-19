import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './models/usuario.model';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [
        SequelizeModule.forRoot({
          dialect: 'sqlite',
          storage: ':memory:', // Usa memória para testes
          autoLoadModels: true,
          synchronize: true, // Cria tabelas automaticamente nos testes
        }),
        SequelizeModule.forFeature([Usuario]),
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
