import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonaRegistroRequest } from 'src/dto/request/Persona.registro.request';
import { ApiResponse } from 'src/dto/response/api.response';
import { PersonaResponse } from 'src/dto/response/persona.response';
import { PersonaJoService } from '../service/persona.jo.service';

@Controller("api/personas")
export class PersonaController {

    constructor(
        private personaJoService:PersonaJoService
    ){
    }

    @Post()
    async register(@Body() request:PersonaRegistroRequest):Promise<ApiResponse> {
        const operationId = Date.now();
        console.log('[BEGIN] JO register', {'request': JSON.stringify(request), operationId});
        const response =  await this.personaJoService.register(request, operationId);
        console.log('[END] JO register', {'response': JSON.stringify(response), operationId});
        return response;
    }

    @Get()
    async listar():Promise<ApiResponse> {
        const operationId = Date.now();
        console.log('[BEGIN] JO listar', {'request': JSON.stringify({}), operationId});
        const response = await this.personaJoService.listar(operationId);
        console.log('[END] JO listar', {'response': JSON.stringify(response), operationId});
        return response;
    }
}