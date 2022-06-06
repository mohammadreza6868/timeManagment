import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiGatewayTimeoutResponse, ApiTags } from '@nestjs/swagger';
import { operationDto } from './Dto/operationDto';
import { OperationService } from './operation.service';



@ApiTags('operation')
@Controller('operation')
export class OperationController {
    constructor(private readonly operationservice : OperationService){}

    @Post('createoperation')
    createoperation(@Body() operationDto : operationDto){
        return this.operationservice.createOperation(operationDto);
    }

    @Get('getoperation')
    async getoperation(){
        return await this.operationservice.getoperation();
    }

    @Put('updateoperation')
    async updateopration(@Body() operationDto : operationDto){
        return await this.operationservice.updateoperation(operationDto);
    }

    @Delete('dalete/:id')
    deleteoperation(@Param() id : number){
        return this.operationservice.deleteoperation(id);
    }
}
