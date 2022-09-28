import { DireccionResponse } from "./direecion.response";
import { TelefonoResponse } from "./telefono.response";

export class PersonaResponse {

    codigo:number;
    nombres:string;
    apellidoPaterno:string;
    apellidoMaterno:string;
    fechaNacimiento:Date;

    direccion:DireccionResponse;
    telefonos:Array<TelefonoResponse>;

    constructor(data?:any) {
        if(data) {
            this.codigo = data.codigo;
            this.nombres = data.nombres;
            this.apellidoPaterno = data.apellidoPaterno;
            this.apellidoMaterno = data.apellidoMaterno;

            if(data.direccion) {
                this.direccion = new DireccionResponse(data.direccion);
            }

            if(data.telefonos) {
                this.telefonos = data.telefonos.map(t => new TelefonoResponse(t));
            } else {
                this.telefonos = [];
            }
        }
    }

}