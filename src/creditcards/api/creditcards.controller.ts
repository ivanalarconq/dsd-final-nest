import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { AddCreditCard } from '../command/application/commands/add.creditcard';
import { AddCreditCardRequestDto } from '../command/application/dto/add.creditcard.request.dto';
import { AddCreditCardResponseDto } from '../command/application/dto/add.creditcard.response.dto';
import { CreditCardCommandMapper } from '../command/application/mappers/creditcard.command.mapper';
import { CreditCardsService } from '../command/application/services/creditcards.service';
import { CreditCardDto } from '../query/dto/creditcard.dto';
import { CreditCardsQuery } from '../query/queries/creditcards.query';

@Controller('creditcards')
export class CreditCardsController {
  constructor(
    private creditcardsService: CreditCardsService,
    private creditcardsQuery: CreditCardsQuery,
  ) {}

  @Post()
  add(
    @Body() addCreditCardRequestDto: AddCreditCardRequestDto,
  ): Promise<AddCreditCardResponseDto> {
    const addCreditCard: AddCreditCard = CreditCardCommandMapper.toAddCreditCardCommand(
      addCreditCardRequestDto,
    );
    return this.creditcardsService.add(addCreditCard);
  }

  @Get()
  getList(): Promise<CreditCardDto[]> {
    return this.creditcardsService.getList();
  }

  @Get(':id')
  getOne(@Param() params): Promise<CreditCardDto> {
    return this.creditcardsService.getOne(params.id);
  }
}
