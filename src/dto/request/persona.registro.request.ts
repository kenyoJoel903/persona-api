import { ApiProperty } from "@nestjs/swagger";
import { DireccionRegistroRequest } from "./direccion.registro.request";
import { TelefonoRegistroRequest } from "./telefono.registro.request";

export class PersonaRegistroRequest {
    @ApiProperty()
    nombres:string;

    @ApiProperty()
    apellidoPaterno:string;

    @ApiProperty()
    apellidoMaterno:string;

    @ApiProperty({example: '1990-01-01'})
    fechaNacimiento:Date;

    @ApiProperty()
    direccion:DireccionRegistroRequest;

    @ApiProperty()
    telefonos:Array<TelefonoRegistroRequest>;
}