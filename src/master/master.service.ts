import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Master } from 'src/entities/Master.entity';
import { Repository } from 'typeorm';
import { MasterDto } from './Dto/masterDto';

@Injectable()
export class MasterService {
  constructor(
    @InjectRepository(Master)
    private masterRepository: Repository<Master>,
  ) {}

  async creatmaster(masterDto: MasterDto) {
    let master = new Master();

    master.date = masterDto.date;
    master.starttime = masterDto.starttime;
    master.startminutes = masterDto.startminutes;
    master.endtime = masterDto.endtime;
    master.endminutes = masterDto.endminutes;
    master.description = masterDto.description;
    master.subject = <any>masterDto.subjectId;
    master.user = <any>masterDto.userId;
    let x = masterDto.starttime * 60 + masterDto.startminutes;
    let y = masterDto.endtime * 60 + masterDto.endminutes;
    let sum = y - x;
    master.totalhours = sum;
    master.save();
  }

  async getmaster() {
    const master = await this.masterRepository.find();
    return master;
  }

  async updatemaster(masterDto: MasterDto) {
    let master = await this.masterRepository.findOne(masterDto);

    if (master) {
      master.date = masterDto.date;
      master.starttime = masterDto.starttime;
      master.startminutes = masterDto.startminutes;
      master.endtime = masterDto.endtime;
      master.endminutes = masterDto.endminutes;
      master.description = masterDto.description;
      master.subject = <any>masterDto.subjectId;
      master.user = <any>masterDto.userId;
      master.save();
      return 'آپدیت انجام شد';
    }
    return ' آیدی مورد نظر یافت نشد';
  }

  async deletemaster(id: number) {
    this.masterRepository.delete(id);
    return 'حذف انجام شد ...';
  }
}
