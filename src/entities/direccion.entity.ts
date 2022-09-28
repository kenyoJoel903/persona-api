import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityBase } from "./base.entity";
import { Persona } from "./persona.entity";

@Entity()
export class Direccion  extends EntityBase {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'bigint', nullable: false})
    codigo:number;

    @Column({length: 80, nullable: false})
    departamento:string;

    @Column({length: 80, nullable: false})
    provincia:string;

    @Column({length: 80, nullable: false})
    distrito:string;

    @Column({length: 80, nullable: false})
    nombreVia:string;

    @Column({length: 5, nullable: false})
    numero:string;

    @OneToOne(() => Persona, (persona) => persona.direccion, {cascade: true})
    persona:Persona;

    constructor(data?:any) {
        super(data);
        if(data) {
            this.id = data.id;
            this.codigo = data.codigo;
            this.departamento = data.departamento;
            this.provincia = data.provincia;
            this.distrito = data.distrito;
            this.nombreVia = data.nombreVia;
            this.numero = data.numero;
            this.persona = null;
            if(data.persona) {
                this.persona = new Persona({
                    id: data.persona.id
                });
            }
        }
    }

}