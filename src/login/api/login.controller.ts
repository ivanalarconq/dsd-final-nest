import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { LoginService } from '../command/application/services/login.service';
import { LoginRequestDto } from '../command/application/dto/login.request.dto';
import { Login } from '../command/application/commands/login';
import { LoginCommandMapper } from '../command/application/mappers/login.command.mapper';
import { LoginResponseDto } from '../command/application/dto/login.response.dto';


@Controller('login')
export class LoginController {
  constructor(
    private loginService: LoginService,    
  ) {}

  @Post()
  login(
    @Body() loginRequestDto: LoginRequestDto,
  ): Promise<LoginResponseDto> {

    const login: Login = LoginCommandMapper.toLoginCommand(
      loginRequestDto,
    );

    console.log("bherring " + login.cardNumber + " " + login.dni + "  " + login.password);

    return this.loginService.login(login);
  }

  
  

}
