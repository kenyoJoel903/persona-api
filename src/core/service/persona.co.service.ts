import { Injectable } from "@nestjs/common";
import { Direccion } from "src/entities/direccion.entity";
import { Persona } from "src/entities/persona.entity";
import { DireccionDao } from "../dao/direccion.dao";
import { PersonaDao } from "../dao/persona.dao";
import { TelefonoDao } from "../dao/telefono.dao";

@Injectable()
export class PersonaCoService {
    
    constructor(
        private personaDao:PersonaDao,
        private direccionDao:DireccionDao,
        private telefonoDao:TelefonoDao
    ){ }

    async register(persona:Persona, operationId: number):Promise<Persona> {
        console.log('[BEGIN] register', {operationId});
        try {
            const fechaCrea = new Date();
            const estadoRegistro = 'A';
            const usuarioCrea = persona.usuarioCrea;

            let telefonos = persona.telefonos;
            let direccion = persona.direccion;
            direccion.codigo = Date.now();
            direccion.estadoRegistro = estadoRegistro;
            direccion.fechaCrea = fechaCrea;
            direccion.usuarioCrea = usuarioCrea;

            const responseDireccion = await this.direccionDao.register(direccion);
            if(!responseDireccion)
                throw new Error('No se pudo registrar direccion');
            
            persona.direccion = responseDireccion;
            persona.telefonos = [];
            persona.codigo = Date.now();
            persona.estadoRegistro = estadoRegistro;
            persona.fechaCrea = fechaCrea;
            let response:Persona = await this.personaDao.register(persona);

            if(telefonos) {
                telefonos.forEach(t => {
                    t.codigo = Date.now() + (Math.floor(Math.random() * 100));
                    t.persona = response;
                    t.estadoRegistro = estadoRegistro;
                    t.fechaCrea = fechaCrea;
                    t.usuarioCrea = usuarioCrea;
                });
                const telefonosResponse = await this.telefonoDao.registerAll(telefonos);
                if(telefonosResponse)
                    response.telefonos = telefonosResponse;

            }
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