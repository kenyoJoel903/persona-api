export class PersonaResponse {

    codigo:number;
    nombres:string;
    apellidoPaterno:string;
    apellidoMaterno:string;
    fechaNacimiento:Date;

    constructor(data?:any) {
        if(data) {
            this.codigo = data.codigo;
            this.nombres = data.nombres;
            this.apellidoPaterno = data.apellidoPaterno;
            this.apellidoMaterno = data.apellidoMaterno;
        }
    }

}