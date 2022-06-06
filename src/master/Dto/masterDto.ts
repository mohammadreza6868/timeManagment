import {  IsInt, isInt, IsNotEmpty, IsOptional, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class MasterDto{

    @ApiProperty()
    @IsOptional()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    date: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    starttime: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    startminutes: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    endtime: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    endminutes: number;

    
    @ApiProperty()
    @IsString()
    description: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    userId : number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    subjectId : number;
}