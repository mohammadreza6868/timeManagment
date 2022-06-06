import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { userDto } from './Dto/userDto';
import { UserService } from './user.service';


@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userservice: UserService) { }

    @Post('creatuser')
    creatuser(@Body() userdto: userDto) {
        this.userservice.creatuser(userdto);
        return 'عملیات با موفقیت انجام شد';
    }

    @Get('getuser')
    async getuser() {
        return await this.userservice.getuser()
    }

    @Put('updateuser')
    async updateuser(@Body() userDto: userDto) {
        return await this.userservice.updateuser(userDto);
    }

    @Delete('delete/:id')
    deleteuser(@Param('id') id : number){
        return this.userservice.deleteuser(id)
    }
}
