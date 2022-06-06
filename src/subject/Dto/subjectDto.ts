import { IsNotEmpty,  IsString} from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class subjectDto{

    @ApiProperty()
    id:number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string;
}