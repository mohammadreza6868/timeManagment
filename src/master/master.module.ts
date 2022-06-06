import { Module } from '@nestjs/common';
import { MasterService } from './master.service';
import { MasterController } from './master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Master } from 'src/entities/Master.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Master])],
  providers: [MasterService],
  controllers: [MasterController]
})
export class MasterModule {}
