export class DireccionResponse {
    codigo:number;
    departamento:string;
    provincia:string;
    distrito:string;
    nombreVia:string;
    numero:string;

    constructor(data?:any) {
        if(data) {
            this.codigo = data.codigo;
            this.departamento = data.departamento;
            this.provincia = data.provincia;
            this.distrito = data.distrito;
            this.nombreVia = data.nombreVia;
            this.numero = data.numero;
        }
    }
}