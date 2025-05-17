import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: './database.sqlite',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
