import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Any, Repository } from 'typeorm';
import { userDto } from './Dto/userDto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private userRepositiry: Repository<User>) { }

    async creatuser(userDto: userDto) {
        let user = new User()

        user.ferstname = userDto.ferstname;
        user.lastname = userDto.lastname;
        user.username = userDto.username;
        user.password = userDto.password;
        user.role = <any>userDto.roleId;
       user.save();
       return 'عملیات با موفقیت انجام شد';
    }

    async getuser() {

        const user= await this.userRepositiry.find()
        return  user;
    }

    async updateuser(userDto: userDto) {
        let user = await this.userRepositiry.findOne(userDto);

        if (user) {
            user.ferstname = userDto.ferstname;
            user.lastname = userDto.lastname;
            user.username = userDto.username;
            user.password = userDto.password;
            user.role = <any> userDto.roleId;
            user.save()
            return 'عملیات آپدیت با موفقیت انجام شد';
        }
        return 'آیدی مورد نظر یافت نشد';
    }

    async deleteuser(id : number){
        this.userRepositiry.delete(id);
        return 'حذف انجام شد';
    }
}
