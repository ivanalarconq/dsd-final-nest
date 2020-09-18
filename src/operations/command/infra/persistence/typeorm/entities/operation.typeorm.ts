import { AccountTypeOrm } from 'src/accounts/command/infra/persistence/typeorm/entities/account.typeorm';
import { CustomerTypeOrm } from 'src/customers/command/infra/persistence/typeorm/entities/customer.typeorm';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('operation')
export class OperationTypeOrm {
  @PrimaryGeneratedColumn('increment', {
    type: 'bigint',
    name: 'operation_id',
    unsigned: true,
  })
  public id: number;

  @Column('varchar', {
    name: 'description',    
    length: 100,
    nullable: false,
  })
  public description: string;

  @Column('decimal', {
    name: 'amount',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  public amount: number;

  @Column('datetime', { name: 'madeAt', nullable: false })
  public madeAt: string;
  
  @Column('tinyint', {
    name: 'isIncome',
    width: 1,
    unsigned: true,
    default: false,
    nullable: false,
  })
  public isIncome: boolean;

  @Column('bigint', { name: 'accountId', unsigned: true, nullable: false })
  public accountId: number;

  @ManyToOne((type) => AccountTypeOrm)
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  public account: AccountTypeOrm;

  @Column('datetime', { name: 'created_at', nullable: false })
  public createdAt: string;

  @Column('datetime', { name: 'updated_at', nullable: false })
  public updatedAt: string;
}
