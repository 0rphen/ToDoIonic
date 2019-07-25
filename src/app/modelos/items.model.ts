export class Item {
    id: number;
    usuario: string;
    correo: string;
    cedula: number;

    constructor(usuario, correo, cedula) {
        this.id = Math.floor((Math.random() * 10000) + 1);
        this.usuario = usuario;
        this.correo = correo;
        this.cedula = cedula;
    }
}
