import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityBase } from "./base.entity";
import { Persona } from "./persona.entity";

@Entity()
export class Telefono extends EntityBase {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'bigint', nullable: false})
    codigo:number;

    @Column({length: 12, nullable: false})
    numero:string;

    @ManyToOne(() => Persona, (persona) => persona.telefonos)
    persona:Persona;

    constructor(data?:any) {
        super(data);
        if(data) {
            this.id = data.id;
            this.codigo = data.codigo;
            this.numero = data.numero;
            this.persona = null;
            if(data.persona) {
                this.persona = new Persona({
                    id: data.persona.id,
                });
            }
            this.id = data.id;
        }
    }
}