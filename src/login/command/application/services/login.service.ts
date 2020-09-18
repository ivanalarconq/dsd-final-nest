import { Injectable, ConflictException } from '@nestjs/common';
import { Login } from '../commands/login';

import { CustomerTypeOrm } from 'src/customers/command/infra/persistence/typeorm/entities/customer.typeorm';
import { getRepository } from 'typeorm';
import { CreditCardTypeOrm } from 'src/creditcards/command/infra/persistence/typeorm/entities/creditcard.typeorm';
import { CustomerQueryMapper } from 'src/customers/query/mappers/customer.query.mapper';
import { CustomerDto } from 'src/customers/query/dto/customer.dto';
import { CreditCardDto } from 'src/creditcards/query/dto/creditcard.dto';
import { CreditCardQueryMapper } from 'src/creditcards/query/mappers/creditcard.query.mapper';
import { LoginCommandMapper } from '../mappers/login.command.mapper';
import { CustomerCommandMapper } from 'src/customers/command/application/mappers/customer.command.mapper';
import { Console } from 'console';
import { LoginResponseDto } from '../dto/login.response.dto';

@Injectable()
export class LoginService {

    async login(login: Login): Promise<LoginResponseDto> {
        
        try {
          
          const customerRepository = getRepository(CustomerTypeOrm);
          const creditCardRepository = getRepository(CreditCardTypeOrm);
          const ormResult = await customerRepository.findOne({dni:login.dni});
          if(ormResult!=null){
            let customer:CustomerDto = CustomerQueryMapper.toDtoFromTypeOrmEntity(ormResult);
            
            const ormResult2 = await creditCardRepository.findOne({customerId:customer.id});
            console.log("primera etapa lista");
            if(ormResult2!=null){
              console.log("segunda etapa lista");
                let creditcardDto : CreditCardDto = CreditCardQueryMapper.toDtoFromTypeOrmEntity(ormResult2);

                console.log("tercera etapa lista " + creditcardDto.webPwd + "  de la web " + login.password);
                if(creditcardDto.cardNumber == login.cardNumber && creditcardDto.webPwd == login.password){
                  console.log("cuarta etapa lista ");
                    return LoginCommandMapper.toLoginResponseDto(customer); 
                }
                
            }
          }
          return null;
          

        } catch (e) {
          console.log(e);
          throw new ConflictException();
        }        
      }


}
