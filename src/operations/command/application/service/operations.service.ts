import { ConflictException, Injectable } from '@nestjs/common';
import { OperationDto } from 'src/operations/queries/dto/operation.dto';
import { OperationQueryMapper } from 'src/operations/queries/mappers/operations.query.mappers';
import { getRepository } from 'typeorm';
import { OperationTypeOrm } from '../../infra/persistence/typeorm/entities/operation.typeorm';

@Injectable()
export class OperationsService {

    async getUserAccounts(id:number): Promise<OperationDto[]> {
    
        try {      
          const operationRepository = getRepository(OperationTypeOrm);
          const ormOperations: any = await operationRepository.find({ accountId: id });     
          return OperationQueryMapper.toDtos(ormOperations); 
    
        } catch (e) {
          console.log(e);
          throw new ConflictException();
        }
        
    }

}
