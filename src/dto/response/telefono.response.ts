export class TelefonoResponse {
    codigo:number;
    numero:string;

    constructor(data?:any) {
        if(data) {
            this.codigo = data.codigo;
            this.numero = data.numero;
        }
    }
}