import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Persona } from "src/entities/persona.entity";
import { Repository } from "typeorm";

@Injectable()
export class PersonaDao {

    constructor(
        @InjectRepository(Persona) private personaRepository: Repository<Persona>) {
        }

    findAll():Promise<Persona[]> {
        return this.personaRepository.find();
    }

    findOne(id:number):Promise<Persona> {
        return this.personaRepository.findOneBy({id});
    }

    listarActivos():Promise<Persona[]> {
        return this.personaRepository.findBy({estadoRegistro : 'A'});
    }

    async remove(id:number): Promise<void> {
        await this.personaRepository.delete(id);
    }

    async register(data:Persona):Promise<Persona> {
        return this.personaRepository.save(data);
    }
}