import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/Role.entity';
import { Repository } from 'typeorm';
import { RoleDto } from './Dto/roleDto';

@Injectable()
export class RoleService {
    constructor(@InjectRepository(Role)
    private rolerepository: Repository<Role>) { }

    createrole(roleDto: RoleDto) {
        let role = new Role();
        role.rolename = roleDto.rolename;
    
        role.save();
        return 'عملیات با موفقیت انجام شد';
    }

    async getrole() {
        const role = await this.rolerepository.find()
       return role;
    }


    async updaterole(roleDto: RoleDto) {
        let role = await this.rolerepository.findOne(roleDto);
        if (role) {
            role.rolename = roleDto.rolename;
            role.save()
            return 'آپدیت انجام شد';
        }
        return 'آیدی مورد نظر یافت نشد';
    }

    deleterole(id : number){
        this.rolerepository.delete(id)
        return 'حذف انجام شد';
    }
}
