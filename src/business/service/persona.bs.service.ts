import { Injectable } from "@nestjs/common";
import { PersonaCoService } from "src/core/service/persona.co.service";
import { PersonaRegistroRequest } from "src/dto/request/Persona.registro.request";
import { PersonaResponse } from "src/dto/response/persona.response";
import { Persona } from "src/entities/persona.entity";

@Injectable()
export class PersonaBsService {

    constructor(
        private personaCoService:PersonaCoService
    ){}

    async register(request:PersonaRegistroRequest, operationId:number):Promise<PersonaResponse> {
        let persona:Persona = new Persona();
        persona.nombres = request.nombre.toUpperCase();
        persona.apellidoPaterno = request.apellidoPaterno.toUpperCase();
        persona.apellidoMaterno = request.apellidoMaterno.toUpperCase();
        persona.fechaNacimiento = request.fechaNacimiento;
        persona.usuarioCrea = 'TEST';
        const response:Persona = await this.personaCoService.register(persona, operationId);
        return new PersonaResponse(response);
    }

}