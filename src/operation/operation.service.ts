import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Operation } from 'src/entities/Operation.entity';
import { Repository } from 'typeorm';
import { operationDto } from './Dto/operationDto';

@Injectable()
export class OperationService {
  constructor(
    @InjectRepository(Operation)
    private Operationrepository: Repository<Operation>,
  ) {}

  async createOperation(operationDto: operationDto) {
    try {
      
      let operation = new Operation();
      operation.name = operationDto.name;
      operation.subject = <any>operationDto.subjectId;
      await operation.save();
      return 'عملیات ثبت گردید';
    } catch (error) {
      console.log('erorr=>>', error);
    }
  }

  async getoperation() {
    const operation = await this.Operationrepository.find();
    return operation;
  }

  async updateoperation(operationDto: operationDto) {
    let operation = await this.Operationrepository.findOne(operationDto);
    if (operation) {
      operation.name = operationDto.name;
      operation.subject = <any>operationDto.subjectId;
      operation.save();
      return 'عملیات آپدیت انجام شد';
    }
    return 'آیدی مورد نظر یافت نشد';
  }

  deleteoperation(id: number) {
    this.Operationrepository.delete(id);
    return 'حذف انجام شد';
  }
}
