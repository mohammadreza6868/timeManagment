import { IsInt, IsNotEmpty } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RoleDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  rolename: string;

  
}