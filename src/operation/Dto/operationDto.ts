import { IsInt, IsNotEmpty, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class operationDto{

    @ApiProperty()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    subjectId : number;
  
}