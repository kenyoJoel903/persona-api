import { ApiProperty } from "@nestjs/swagger";

export class DireccionRegistroRequest {

    @ApiProperty()
    departamento:string;

    @ApiProperty()
    provincia:string;

    @ApiProperty()
    distrito:string;

    @ApiProperty()
    nombreVia:string;

    @ApiProperty()
    numero:string;
}