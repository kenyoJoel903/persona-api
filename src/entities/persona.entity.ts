import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityBase } from "./base.entity";
import { Direccion } from "./direccion.entity";
import { Telefono } from "./telefono.entity";

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

    @OneToOne(() => Direccion)
    @JoinColumn()
    direccion:Direccion;

    @OneToMany(() => Telefono, (telefono) => telefono.persona)
    telefonos:Array<Telefono>;

    constructor(data?:any) {
        super(data);
        if(data) {
            this.id = data.id;
            this.codigo = data.codigo;
            this.nombres = data.nombres;
            this.apellidoPaterno = data.apellidoPaterno;
            this.apellidoMaterno = data.apellidoMaterno;
            this.fechaNacimiento = data.fechaNacimiento;
            this.direccion = null;
            if(data.direccion) {
                this.direccion = new Direccion(data.direccion);
            }
            if(data.telefonos) {
                this.telefonos = data.telefonos.map(t => new Telefono(t));
            } else {
                this.telefonos = [];
            }
        }
    }
}
