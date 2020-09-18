import { Module } from '@nestjs/common';
import { CreditCardsController } from './api/creditcards.controller';
import { CreditCardsService } from './command/application/services/creditcards.service';
import { CreditCardsQuery } from './query/queries/creditcards.query';
import { Repository } from 'typeorm';

@Module({
  controllers: [CreditCardsController],
  providers: [CreditCardsService, CreditCardsQuery, Repository]
})
export class CreditcardsModule {}
