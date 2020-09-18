import { CreditCardTypeOrm } from 'src/creditcards/command/infra/persistence/typeorm/entities/creditcard.typeorm';
import { CreditCardDto } from '../dto/creditcard.dto';

export class CreditCardQueryMapper {
  public static toDtos(ormCreditCards: []): CreditCardDto[] {
    return ormCreditCards.map((ormCreditCard) => this.toDto(ormCreditCard));
  }

  public static toDto(ormCreditCard: any): CreditCardDto {
    const creditCardDto: CreditCardDto = new CreditCardDto();
    creditCardDto.id = parseInt(ormCreditCard.id, 10);
    creditCardDto.cardNumber = ormCreditCard.cardNumber;  
    creditCardDto.expireAt = ormCreditCard.expireAt;  
    creditCardDto.webPwd = ormCreditCard.webPwd;  
    creditCardDto.isActive = Boolean(ormCreditCard.is_active).valueOf();
    creditCardDto.createdAt = ormCreditCard.createdAt;
    creditCardDto.updatedAt = ormCreditCard.updatedAt;
    creditCardDto.customerId = ormCreditCard.customerId;

    return creditCardDto;
  }

  public static toDtoFromTypeOrmEntity(
    creditCardTypeOrm: CreditCardTypeOrm,
  ): CreditCardDto {
    const creditCardDto: CreditCardDto = new CreditCardDto();
    creditCardDto.id = creditCardTypeOrm.id;
    creditCardDto.cardNumber = creditCardTypeOrm.cardNumber;
    creditCardDto.expireAt = creditCardTypeOrm.expireAt;
    creditCardDto.isActive = Boolean(creditCardTypeOrm.isActive).valueOf();
    creditCardDto.createdAt = creditCardTypeOrm.createdAt;
    creditCardDto.updatedAt = creditCardTypeOrm.updatedAt;
    creditCardDto.webPwd = creditCardTypeOrm.webPwd;
    return creditCardDto;
  }
}
