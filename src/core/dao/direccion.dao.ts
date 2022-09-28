import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Direccion } from "src/entities/direccion.entity";
import { Telefono } from "src/entities/telefono.entity";
import { Repository } from "typeorm";

@Injectable()
export class DireccionDao {

    constructor(
        @InjectRepository(Direccion) private direccionRepository: Repository<Direccion>
    ){}

    async register(data:Direccion):Promise<Direccion> {
        return this.direccionRepository.save(data);
    }
}