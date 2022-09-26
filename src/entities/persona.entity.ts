import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EntityBase } from "./base.entity";

@Entity()
export class Persona extends EntityBase {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'bigint', nullable: false})
    codigo:number;

    @Column({length: 80, nullable: false})
    nombres:string;

    @Column({length: 80, nullable: false})
    apellidoPaterno:string;

    @Column({length: 80, nullable: false})
    apellidoMaterno:string;

    @Column({ type: 'date', nullable: false })
    fechaNacimiento:Date;

    
}
