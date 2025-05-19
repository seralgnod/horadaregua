import { Injectable } from '@nestjs/common';
import { Usuario } from './models/usuario.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async checkDatabase(): Promise<string> {
    try {
      const count = await this.usuarioModel.count();
      return `Conexão com SQLite bem-sucedida. Total de usuários: ${count}`;
    } catch (error) {
      return `Erro na conexão: ${(error as Error).message}`;
    }
  }
}
