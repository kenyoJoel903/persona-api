import { ApiProperty } from "@nestjs/swagger";

export class PersonaRegistroRequest {
    @ApiProperty()
    nombre:string;

    @ApiProperty()
    apellidoPaterno:string;

    @ApiProperty()
    apellidoMaterno:string;

    @ApiProperty({example: '1990-01-01'})
    fechaNacimiento:Date;
}