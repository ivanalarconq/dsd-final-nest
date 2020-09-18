import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CustomerTypeOrm } from 'src/customers/command/infra/persistence/typeorm/entities/customer.typeorm';

@Entity('creditcard')
export class CreditCardTypeOrm {
  @PrimaryGeneratedColumn('increment', {
    type: 'bigint',
    name: 'creditcard_id',
    unsigned: true,
  })
  public id: number;

  @Column('varchar', {
    name: 'cardNumber',
    unique: true,
    length: 16,
    nullable: false,
  })
  public cardNumber: string;

  @Column('varchar', { name: 'expireAt', nullable: false })
  public expireAt: string;

  @Column('varchar', { name: 'webPwd', nullable: false })
  public webPwd: string;

  @Column('tinyint', {
    name: 'is_active',
    width: 1,
    unsigned: true,
    default: true,
    nullable: false,
  })
  public isActive: boolean;

  @Column('datetime', { name: 'created_at', nullable: false })
  public createdAt: string;

  @Column('datetime', { name: 'updated_at', nullable: false })
  public updatedAt: string;

  @Column('bigint', { name: 'customer_id', unsigned: true, nullable: false })
  public customerId: number;
  @ManyToOne((type) => CustomerTypeOrm)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  public customer: CustomerTypeOrm;

  public static withId(id: number): CreditCardTypeOrm {
    let creditcardTypeOrm: CreditCardTypeOrm = new CreditCardTypeOrm();
    creditcardTypeOrm.id = Number(id);
    return creditcardTypeOrm;
  }
}
