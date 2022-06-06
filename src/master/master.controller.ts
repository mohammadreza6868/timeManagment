import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MasterDto } from './Dto/masterDto';
import { MasterService } from './master.service';

@ApiTags('master')
@Controller('master')
export class MasterController {
    constructor (private readonly masterservice : MasterService){}

    @Post('creatmaster')
    creatmaster(@Body() masterDto : MasterDto){
        this.masterservice.creatmaster(masterDto);
        return 'عملیات با موفقیت انجام شد';
    }

    @Get('getmaster')
    async getmaster(){
        return await this.masterservice.getmaster();
    }

    @Put('updatemaster')
    async updatemaster(@Body() masterDto : MasterDto ){
        return await this.masterservice.updatemaster( masterDto);
    }

    @Delete('delete/:id')
    deletemaster(@Param('id') id : number){
        return this.masterservice.deletemaster(id);

    }

}
