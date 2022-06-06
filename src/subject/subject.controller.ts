import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { subjectDto } from './Dto/subjectDto';
import { SubjectService } from './subject.service';


@ApiTags('subject')
@Controller('subject')
export class SubjectController {
    constructor(private readonly subjectservice: SubjectService) { }

    @Post('createsubject')
    createsubject(@Body() subjectDto: subjectDto) {
        return this.subjectservice.createsubject(subjectDto);
    }

    @Get('getsubject')
    async getsubject(){
        return await this.subjectservice.getsubject();
    }

@Put('updaesubject')
async updatesubject(@Body() subjectDto : subjectDto){
    return await this.subjectservice.updatesubject(subjectDto);
}

@Delete('delete/:id')
deletesubject(@Param() id :number){
    return this.subjectservice.deletesubject(id);
}

}
