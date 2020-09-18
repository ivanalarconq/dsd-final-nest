import { Controller, Get, Param } from '@nestjs/common';
import { OperationsService } from '../command/application/service/operations.service';
import { OperationDto } from '../queries/dto/operation.dto';


@Controller('operations')
export class OperationsController {
    constructor(
        private operationsService: OperationsService,        
      ) {}
    
     
  
    @Get(':id')
        getList(@Param() params): Promise<OperationDto[]> {    
        return this.operationsService.getUserAccounts(params.id);
    }

}
