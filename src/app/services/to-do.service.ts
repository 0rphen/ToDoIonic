import { Injectable } from '@angular/core';
import { Item } from '../modelos/items.model';

@Injectable({
    providedIn: 'root'
})
export class ToDoService {
    items: Item[] = [];
    constructor() {
        const item1 = new Item('Pitufina', 'pitufina@gmail.com', 123213);
        const item2 = new Item('Papa Pitufo', 'papa_pitufo@gmail.com', 1232121);
        this.items.push(item1, item2);
        console.log(this.items);
    }

    crearItem(item: Item) {
        this.items.push(item);
    }

    editarItem(item: Item, id: number) {
        console.log(id);
        for (let i = 0; i <= this.items.length; i++) {
            if (this.items[i].id === id) {
                this.items[i].usuario = item.usuario;
                this.items[i].cedula = item.cedula;
                this.items[i].correo = item.correo;
            }
        }
    }

    guardar(id: number) {
        if (id == 0)
            console.log('Nuevo');
        else
            console.log('Editar');
    }
}
