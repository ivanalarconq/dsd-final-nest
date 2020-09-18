
import { OperationTypeOrm } from 'src/operations/command/infra/persistence/typeorm/entities/operation.typeorm';
import { OperationDto } from '../dto/operation.dto';


export class OperationQueryMapper {
  public static toDtos(ormOperations: []): OperationDto[] {
    return ormOperations.map((ormOperation) => this.toDtoFromTypeOrmEntity(ormOperation));
  }

  public static toDto(ormOperation: any): OperationDto {
    const operationDto: OperationDto = new OperationDto();
    operationDto.id = parseInt(ormOperation.operation_id, 10);
    operationDto.description = ormOperation.description;
    operationDto.amount = ormOperation.balance;
    operationDto.madeAt = ormOperation.madeAt;
    operationDto.accountId = ormOperation.accountId;
    operationDto.isIncome = Boolean(ormOperation.isIncome).valueOf();    
    return operationDto;
  }

  public static toDtoFromTypeOrmEntity(
    operationTypeOrm: OperationTypeOrm,
  ): OperationDto {
    const operationDto: OperationDto = new OperationDto();
    operationDto.id = operationTypeOrm.id;
    operationDto.description = operationTypeOrm.description;
    operationDto.amount = operationTypeOrm.amount;
    operationDto.madeAt = operationTypeOrm.madeAt;
    operationDto.accountId = operationTypeOrm.accountId;
    operationDto.isIncome = Boolean(operationTypeOrm.isIncome).valueOf();    
    
    return operationDto;
  }
}
