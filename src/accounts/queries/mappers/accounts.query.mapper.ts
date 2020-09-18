import { AccountTypeOrm } from 'src/accounts/command/infra/persistence/typeorm/entities/account.typeorm';
import { AccountDto } from '../dto/account.dto';


export class AccountQueryMapper {
  public static toDtos(ormAccounts: []): AccountDto[] {
    return ormAccounts.map((ormAccount) => this.toDtoFromTypeOrmEntity(ormAccount));
  }

  public static toDto(ormAccount: any): AccountDto {
    const accountDto: AccountDto = new AccountDto();
    accountDto.id = parseInt(ormAccount.account_id, 10);
    accountDto.number = ormAccount.number;
    accountDto.type = ormAccount.type;
    accountDto.balance = ormAccount.balance;
    accountDto.customerId = ormAccount.customer_id;
    accountDto.isLocked = Boolean(ormAccount.is_locked).valueOf();    
    return accountDto;
  }

  public static toDtoFromTypeOrmEntity(
    accountTypeOrm: AccountTypeOrm,
  ): AccountDto {
    const accountDto: AccountDto = new AccountDto();
    accountDto.id = accountTypeOrm.id;
    accountDto.number = parseInt(accountTypeOrm.number);
    accountDto.type = accountTypeOrm.type;
    accountDto.balance = accountTypeOrm.balance;
    accountDto.customerId = accountTypeOrm.customerId;
    accountDto.isLocked = Boolean(accountTypeOrm.isLocked).valueOf();    
    
    return accountDto;
  }
}
