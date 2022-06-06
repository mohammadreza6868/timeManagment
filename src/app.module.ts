import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MasterModule } from './master/master.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { SubjectModule } from './subject/subject.module';
import { OperationModule } from './operation/operation.module';

@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot(), MasterModule, UserModule, RoleModule, SubjectModule, OperationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
