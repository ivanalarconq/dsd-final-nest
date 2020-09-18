
import { DateTime } from 'src/app/infra/utils/datetime';
import { LoginRequestDto } from '../dto/login.request.dto';
import { Login } from '../commands/login';
import { CustomerTypeOrm } from 'src/customers/command/infra/persistence/typeorm/entities/customer.typeorm';

import { CustomerDto } from 'src/customers/query/dto/customer.dto';
import { LoginResponseDto } from '../dto/login.response.dto';


export class LoginCommandMapper {
  public static toLoginCommand(
    loginRequestDto: LoginRequestDto,
  ): Login {
    let login: Login = new Login();
    login.cardNumber = loginRequestDto.cardNumber;
    login.dni = loginRequestDto.dni;
    login.password = loginRequestDto.password;    
    return login;
  }

  public static toLoginResponseDto(
    customerDto: CustomerDto,
  ): LoginResponseDto {
    let loginResponseDto: LoginResponseDto = new LoginResponseDto();
    loginResponseDto.id = Number(customerDto.id);
    loginResponseDto.firstName = customerDto.firstName;
    loginResponseDto.lastName = customerDto.lastName;    
    return loginResponseDto;
  }
}
