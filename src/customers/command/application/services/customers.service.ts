import { ConflictException, Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CustomerTypeOrm } from '../../infra/persistence/typeorm/entities/customer.typeorm';
import { AddCustomer } from '../commands/add.customer';
import { AddCustomerResponseDto } from '../dto/add.customer.response.dto';
import { CustomerCommandMapper } from '../mappers/customer.command.mapper';
import { CustomerDto } from 'src/customers/query/dto/customer.dto';
import { CustomerQueryMapper } from 'src/customers/query/mappers/customer.query.mapper';

@Injectable()
export class CustomersService {
  constructor() {}

  async add(addCustomer: AddCustomer): Promise<AddCustomerResponseDto> {
    let customerTypeOrm: CustomerTypeOrm;
    try {
      customerTypeOrm = CustomerCommandMapper.toCustomerTypeOrm(addCustomer);
      const customerRepository = getRepository(CustomerTypeOrm);
      const ormResult = await customerRepository.insert(customerTypeOrm);
      const id = parseInt(ormResult.identifiers[0].id);
      customerTypeOrm.id = id;
    } catch (e) {
      console.log(e);
      throw new ConflictException(customerTypeOrm);
    }
    return CustomerCommandMapper.toAddCustomerResponseDto(customerTypeOrm);
  }

  async getList(): Promise<CustomerDto[]> {
    
    try {      
      const customerRepository = getRepository(CustomerTypeOrm);
      const ormCustomers: any = await customerRepository.find();     
      return CustomerQueryMapper.toDtos(ormCustomers); 

    } catch (e) {
      console.log(e);
      throw new ConflictException();
    }
    
  }

  async getOne(id:number): Promise<CustomerDto> {
    
    try {      
      const customerRepository = getRepository(CustomerTypeOrm);
      const ormCustomers: any = await customerRepository.findOne(id,  { relations: ["creditcard"] });    
      if(ormCustomers==null) {
        return null; 
      }else{
        return CustomerQueryMapper.toDtoFromTypeOrmEntity(ormCustomers); 
      }
      

    } catch (e) {
      console.log(e);
      throw new ConflictException();
    }
    
  }



}
