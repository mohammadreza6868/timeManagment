import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoleDto } from './Dto/roleDto';
import { RoleService } from './role.service';


@ApiTags('role')
@Controller('role')
export class RoleController {
    constructor(private readonly roleservice : RoleService){}

    @Post('creatrole')
    createrole(@Body() roleDto : RoleDto){
        return this.roleservice.createrole(roleDto);
    }

    @Get()
    async getrole(){
        return await this.roleservice.getrole();
    }

    @Put('updaterole')
   async updaterole (@Body() roleDto : RoleDto){
       return await this.roleservice.updaterole(roleDto);
   }

@Delete('delete/:id')
deleterole(@Param() id : number){
    return this.roleservice.deleterole(id);
}
}
