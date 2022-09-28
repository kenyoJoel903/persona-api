import { Column } from "typeorm";

export class EntityBase {

    @Column({length: 1, nullable: false})
    estadoRegistro:string;

    @Column({type: 'timestamptz', nullable: false})
    fechaCrea:Date;

    @Column({type: 'timestamptz', nullable: true})
    fechaModifica:Date;

    @Column({length: 20, nullable: false})
    usuarioCrea:string;

    @Column({length: 20, nullable: true})
    usuarioModifica:String;

    constructor(data:any) {
        if(data) {
            this.estadoRegistro = data.estadoRegistro;
            this.fechaCrea = data.fechaCrea;
            this.fechaModifica = data.fechaModifica;
            this.usuarioCrea = data.usuarioCrea;
            this.usuarioModifica = data.usuarioModifica;
        }
    }
}