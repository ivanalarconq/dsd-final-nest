import { CustomerTypeOrm } from '../../infra/persistence/typeorm/entities/customer.typeorm';
import { AddCustomerRequestDto } from '../dto/add.customer.request.dto';
import { AddCustomer } from '../commands/add.customer';
import { AddCustomerResponseDto } from '../dto/add.customer.response.dto';
import { DateTime } from 'src/app/infra/utils/datetime';
import { Customer } from '../../domain/entities/customer.entity';

export class CustomerCommandMapper {
  public static toAddCustomerCommand(
    addCustomerRequestDto: AddCustomerRequestDto,
  ): AddCustomer {
    let addCustomer: AddCustomer = new AddCustomer();
    addCustomer.firstName = addCustomerRequestDto.firstName;
    addCustomer.lastName = addCustomerRequestDto.lastName;
    addCustomer.dni = addCustomerRequestDto.dni;
    addCustomer.isActive = true;
    addCustomer.createdAt = DateTime.getUtcDateTime();
    addCustomer.updatedAt = DateTime.getUtcDateTime();
    return addCustomer;
  }

  public static toCustomerTypeOrm(addCustomer: AddCustomer): CustomerTypeOrm {
    let customerTypeOrm: CustomerTypeOrm = new CustomerTypeOrm();
    customerTypeOrm.firstName = addCustomer.firstName;
    customerTypeOrm.lastName = addCustomer.lastName;
    customerTypeOrm.dni = addCustomer.dni;
    customerTypeOrm.isActive = addCustomer.isActive;
    customerTypeOrm.createdAt = addCustomer.createdAt;
    customerTypeOrm.updatedAt = addCustomer.updatedAt;
    return customerTypeOrm;
  }

  public static toCustomerWithId(id: number): Customer {
    return Customer.withId(id);
  }

  public static toCustomerTypeOrmWithId(id: number): CustomerTypeOrm {
    return CustomerTypeOrm.withId(id);
  }

  public static toAddCustomerResponseDto(
    customerTypeOrm: CustomerTypeOrm,
  ): AddCustomerResponseDto {
    let addCustomerResponseDto: AddCustomerResponseDto = new AddCustomerResponseDto();
    addCustomerResponseDto.id = Number(customerTypeOrm.id);
    addCustomerResponseDto.firstName = customerTypeOrm.firstName;
    addCustomerResponseDto.lastName = customerTypeOrm.lastName;
    addCustomerResponseDto.isActive = customerTypeOrm.isActive;
    addCustomerResponseDto.createdAt = customerTypeOrm.createdAt;
    addCustomerResponseDto.updatedAt = customerTypeOrm.updatedAt;
    return addCustomerResponseDto;
  }
}
