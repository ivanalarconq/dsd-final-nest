import { Module } from '@nestjs/common';
import { LoginService } from './command/application/services/login.service';
import { LoginController } from './api/login.controller';

@Module({
  providers: [LoginService],
  controllers: [LoginController]
})
export class LoginModule {}
