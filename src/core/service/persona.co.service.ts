import { Injectable } from "@nestjs/common";
import { Persona } from "src/entities/persona.entity";
import { PersonaDao } from "../dao/persona.dao";

@Injectable()
export class PersonaCoService {
    
    constructor(
        private personaDao:PersonaDao
    ){ }

    async register(persona:Persona, operationId: number):Promise<Persona> {
        console.log('[BEGIN] register', persona, operationId);
        persona.codigo = Date.now();
        persona.estadoRegistro = 'A';
        persona.fechaCrea = new Date();
        const response:Persona = await this.personaDao.register(persona);
        console.log('[END] register', response, operationId);
        return response;
    }
}