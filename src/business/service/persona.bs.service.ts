import { Injectable } from "@nestjs/common";
import { PersonaCoService } from "src/core/service/persona.co.service";
import { PersonaRegistroRequest } from "src/dto/request/Persona.registro.request";
import { ApiBsResponse } from "src/dto/response/api.bs.response";
import { PersonaResponse } from "src/dto/response/persona.response";
import { Persona } from "src/entities/persona.entity";

@Injectable()
export class PersonaBsService {

    constructor(
        private personaCoService:PersonaCoService
    ){}

    async register(request:PersonaRegistroRequest, operationId:number):Promise<ApiBsResponse> {
        console.log('[BEGIN] BS register', {request, operationId});
        let response:ApiBsResponse = new ApiBsResponse();
        response.operationCode = operationId;
        response.error = true;
        try {
            if(!request.nombre || !request.apellidoPaterno || !request.fechaNacimiento) {
                response.message = 'Ingresar nombres y appelidos'
            } else {
                let persona:Persona = new Persona();
                persona.nombres = request.nombre.toUpperCase();
                persona.apellidoPaterno = request.apellidoPaterno.toUpperCase();
                persona.apellidoMaterno = request.apellidoMaterno.toUpperCase();
                persona.fechaNacimiento = request.fechaNacimiento;
                persona.usuarioCrea = 'TEST';
                const responseCo:Persona = await this.personaCoService.register(persona, operationId);
                if(!responseCo) {
                    response.message = 'No se puedo registrar';
                } else {
                    response.error = false;
                    response.content = new PersonaResponse(responseCo);
                }
            }
        } catch (error) {
            response.message = 'Ocurrió un error inesperado';
        }
        
        console.log('[END] BS register', { operationId});
        return response;
    }

    async listar(operationId:number):Promise<ApiBsResponse> {
        console.log('[BEGIN] BS listar', {operationId});
        let response:ApiBsResponse = new ApiBsResponse();
        response.operationCode = operationId;
        response.error = true;
        try {
            const responseCo: Array<Persona> = await this.personaCoService.list(operationId);
            response.error = false;
            console.log(responseCo);
            if(responseCo) {
                response.content = responseCo.map(p => {
                    return new PersonaResponse(p);
                });
            } else {
                response.content = [];
            }
        } catch (error) {
            response.message = 'Ocurrió un error inesperado';
        }
        console.log('[END] BS register', { response, operationId});
        return response;
    }

}