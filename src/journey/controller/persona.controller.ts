import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonaRegistroRequest } from 'src/dto/request/Persona.registro.request';
import { PersonaResponse } from 'src/dto/response/persona.response';
import { PersonaJoService } from '../service/persona.jo.service';

@Controller("api/personas")
export class PersonaController {

    constructor(
        private personaJoService:PersonaJoService
    ){
    }

    @Post()
    async register(@Body() request:PersonaRegistroRequest):Promise<PersonaResponse> {
        const operationId = Date.now();
        return this.personaJoService.register(request, operationId);
    }
}