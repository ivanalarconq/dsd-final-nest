import { ConflictException, Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreditCardTypeOrm } from '../../infra/persistence/typeorm/entities/creditcard.typeorm';
import { AddCreditCard } from '../commands/add.creditcard';
import { AddCreditCardResponseDto } from '../dto/add.creditcard.response.dto';
import { CreditCardCommandMapper } from '../mappers/creditcard.command.mapper';
import { CreditCardQueryMapper } from 'src/creditcards/query/mappers/creditcard.query.mapper';
import { CreditCardDto } from 'src/creditcards/query/dto/creditcard.dto';

@Injectable()
export class CreditCardsService {
  constructor() {}

  async add(addCreditCard: AddCreditCard): Promise<AddCreditCardResponseDto> {
    let creditCardTypeOrm: CreditCardTypeOrm;
    try {
      creditCardTypeOrm = CreditCardCommandMapper.toCreditCardTypeOrm(addCreditCard);
      const creditCardRepository = getRepository(CreditCardTypeOrm);
      const ormResult = await creditCardRepository.insert(creditCardTypeOrm);
      const id = parseInt(ormResult.identifiers[0].id);
      creditCardTypeOrm.id = id;
    } catch (e) {
      console.log(e);
      throw new ConflictException(creditCardTypeOrm);
    }
    return CreditCardCommandMapper.toAddCreditCardResponseDto(creditCardTypeOrm);
  }

  async getList(): Promise<CreditCardDto[]> {
    
    try {      
      const creditcardRepository = getRepository(CreditCardTypeOrm);
      const ormCreditcards: any = await creditcardRepository.find();     
      return CreditCardQueryMapper.toDtos(ormCreditcards); 

    } catch (e) {
      console.log(e);
      throw new ConflictException();
    }
    
  }

  async getOne(id:number): Promise<CreditCardDto> {
    
    try {      
      const creditcardRepository = getRepository(CreditCardTypeOrm);
      const ormCreditCards: any = await creditcardRepository.findOne(id);    
      if(ormCreditCards==null) {
        return null; 
      }else{
        return CreditCardQueryMapper.toDtoFromTypeOrmEntity(ormCreditCards); 
      }
      

    } catch (e) {
      console.log(e);
      throw new ConflictException();
    }
    
  }


}
