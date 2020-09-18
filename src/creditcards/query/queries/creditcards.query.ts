import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CreditCardDto } from '../dto/creditcard.dto';
import { CreditCardQueryMapper } from '../mappers/creditcard.query.mapper';

@Injectable()
export class CreditCardsQuery {
  public async getList(): Promise<CreditCardDto[]> {
    const manager = getManager();
    const sql = `
    SELECT 
      creditcard_id,
      card_number,
      expire_at,
      web_pwd,
      is_active,
      created_at,
      updated_at
    FROM 
      creditcard`;
    const ormCreditcards: any = await manager.query(sql);
    return CreditCardQueryMapper.toDtos(ormCreditcards);
  }
}
