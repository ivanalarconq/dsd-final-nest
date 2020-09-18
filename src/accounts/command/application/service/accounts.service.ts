import { Injectable, ConflictException } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { AccountDto } from 'src/accounts/queries/dto/account.dto';
import { AccountTypeOrm } from '../../infra/persistence/typeorm/entities/account.typeorm';
import { AccountQueryMapper } from 'src/accounts/queries/mappers/accounts.query.mapper';

@Injectable()
export class AccountsService {

    async getList(): Promise<AccountDto[]> {
    
        try {      
          const accountRepository = getRepository(AccountTypeOrm);
          const ormAccounts: any = await accountRepository.find();     
          return AccountQueryMapper.toDtos(ormAccounts); 
    
        } catch (e) {
          console.log(e);
          throw new ConflictException();
        }
        
      }

      async getUserAccounts(id:number): Promise<AccountDto[]> {
    
        try {      
          const accountRepository = getRepository(AccountTypeOrm);
          const ormAccounts: any = await accountRepository.find({ customerId: id });     
          return AccountQueryMapper.toDtos(ormAccounts); 
    
        } catch (e) {
          console.log(e);
          throw new ConflictException();
        }
        
      }

}
