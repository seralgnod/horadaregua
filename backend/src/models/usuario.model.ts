import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'usuarios',
  timestamps: true,
})
export class Usuario extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING(100))
  nome: string;

  @Column(DataType.STRING(120))
  email: string;

  @Column(DataType.STRING(255))
  senha_hash: string;

  @Column(DataType.STRING(20))
  telefone: string;
}
