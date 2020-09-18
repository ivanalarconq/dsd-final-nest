import { Module } from '@nestjs/common';
import { OperationsController } from './api/operations.controller';
import { OperationsService } from './command/application/service/operations.service';


@Module({
  providers: [OperationsService],
  controllers: [OperationsController]
})
export class OperationsModule {}
