import { Controller, Get, Param } from '@nestjs/common';
import { AccountsService } from '../command/application/service/accounts.service';
import { AccountDto } from '../queries/dto/account.dto';

@Controller('accounts')
export class AccountsController {
    constructor(
        private accountsService: AccountsService,        
      ) {}
    
      
    @Get()
        getList(): Promise<AccountDto[]> {    
        return this.accountsService.getList();
    }

    @Get(':id')
        getUserAccounts(@Param() params): Promise<AccountDto[]> {    
        return this.accountsService.getUserAccounts(params.id);
    }

}
