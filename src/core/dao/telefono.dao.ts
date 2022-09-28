import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Telefono } from "src/entities/telefono.entity";
import { Repository } from "typeorm";

@Injectable()
export class TelefonoDao {

    constructor(
        @InjectRepository(Telefono) private telefonoRepository: Repository<Telefono>
    ){}

    async register(data:Telefono):Promise<Telefono> {
        return this.telefonoRepository.save(data);
    }

    async registerAll(data:Array<Telefono>):Promise<Array<Telefono>> {
        return this.telefonoRepository.save(data)
    }
}