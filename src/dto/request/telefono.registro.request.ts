import { ApiProperty } from "@nestjs/swagger";

export class TelefonoRegistroRequest {

    @ApiProperty()
    numero:string;
}