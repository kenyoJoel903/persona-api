import { Injectable } from "@nestjs/common";
import { PersonaBsService } from "src/business/service/persona.bs.service";
import { PersonaRegistroRequest } from "src/dto/request/Persona.registro.request";
import { PersonaResponse } from "src/dto/response/persona.response";

@Injectable()
export class PersonaJoService {

    constructor(
        private personaBsService: PersonaBsService
    ){
    }

    async register(request:PersonaRegistroRequest, operationId:number): Promise<PersonaResponse> {
        return this.personaBsService.register(request, operationId);
    }

}