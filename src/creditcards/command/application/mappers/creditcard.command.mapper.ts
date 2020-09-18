import { CreditCardTypeOrm } from '../../infra/persistence/typeorm/entities/creditcard.typeorm';
import { AddCreditCardRequestDto } from '../dto/add.creditcard.request.dto';
import { AddCreditCard } from '../commands/add.creditcard';
import { AddCreditCardResponseDto } from '../dto/add.creditcard.response.dto';
import { DateTime } from 'src/app/infra/utils/datetime';
import { CreditCard } from '../../domain/entities/creditcard.entity';

export class CreditCardCommandMapper {
  public static toAddCreditCardCommand(
    addCreditCardRequestDto: AddCreditCardRequestDto,
  ): AddCreditCard {
    let addCreditCard: AddCreditCard = new AddCreditCard();
    addCreditCard.cardNumber = addCreditCardRequestDto.cardNumber;
    addCreditCard.expireAt = addCreditCardRequestDto.expireAt;
    addCreditCard.isActive = true;
    addCreditCard.createdAt = DateTime.getUtcDateTime();
    addCreditCard.updatedAt = DateTime.getUtcDateTime();
    return addCreditCard;
  }

  public static toCreditCardTypeOrm(addCreditCard: AddCreditCard): CreditCardTypeOrm {
    let creditCardTypeOrm: CreditCardTypeOrm = new CreditCardTypeOrm();
    creditCardTypeOrm.cardNumber = addCreditCard.cardNumber;
    creditCardTypeOrm.expireAt = addCreditCard.expireAt;
    creditCardTypeOrm.isActive = addCreditCard.isActive;
    creditCardTypeOrm.createdAt = addCreditCard.createdAt;
    creditCardTypeOrm.updatedAt = addCreditCard.updatedAt;
    return creditCardTypeOrm;
  }

  public static toCreditCardWithId(id: number): CreditCard {
    return CreditCard.withId(id);
  }

  public static toCreditCardTypeOrmWithId(id: number): CreditCardTypeOrm {
    return CreditCardTypeOrm.withId(id);
  }

  public static toAddCreditCardResponseDto(
    creditCardTypeOrm: CreditCardTypeOrm,
  ): AddCreditCardResponseDto {
    let addCreditCardResponseDto: AddCreditCardResponseDto = new AddCreditCardResponseDto();
    addCreditCardResponseDto.id = Number(creditCardTypeOrm.id);
    addCreditCardResponseDto.cardNumber = creditCardTypeOrm.cardNumber;
    addCreditCardResponseDto.expireAt = creditCardTypeOrm.expireAt;
    addCreditCardResponseDto.webPwd = creditCardTypeOrm.webPwd;
    addCreditCardResponseDto.isActive = creditCardTypeOrm.isActive;
    addCreditCardResponseDto.createdAt = creditCardTypeOrm.createdAt;
    addCreditCardResponseDto.updatedAt = creditCardTypeOrm.updatedAt;
    return addCreditCardResponseDto;
  }
}
