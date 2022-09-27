import { Injectable } from "@nestjs/common";
import { Persona } from "src/entities/persona.entity";
import { PersonaDao } from "../dao/persona.dao";

@Injectable()
export class PersonaCoService {
    
    constructor(
        private personaDao:PersonaDao
    ){ }

    async register(persona:Persona, operationId: number):Promise<Persona> {
        console.log('[BEGIN] register', {persona, operationId});
        try {
            persona.codigo = Date.now();
            persona.estadoRegistro = 'A';
            persona.fechaCrea = new Date();
            const response:Persona = await this.personaDao.register(persona);
            console.log('[END] register', {operationId});
            return response;
        } catch (error) {
            console.log('[ERROR] register', { error, operationId})
            return null;
        }
    }

    async list(operationId: number): Promise<Persona[]> {
        console.log('[BEGIN] list', {operationId});
        try {
            const response: Array<Persona> = await this.personaDao.listarActivos();
            console.log('[END] list', {operationId});
            return response;
        } catch (error) {
            console.log('[ERROR] list', {error, operationId})
            return null;
        }
    }
}