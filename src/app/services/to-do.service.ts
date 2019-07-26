import { Injectable } from '@angular/core';
import { Item } from '../modelos/items.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ToDoService {
    items: Item[] = [];
    constructor(private http: HttpClient) {
        const item1 = new Item('Pitufina', 'pitufina@gmail.com', 123213);
        const item2 = new Item('Papa Pitufo', 'papa_pitufo@gmail.com', 1232121);
        this.items.push(item1, item2);
    }

    crearItem(item: Item) {
        this.items.push(item);
        this.guardar(0, item);
    }

    editarItem(item: Item, id: number) {
        console.log(id);
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                this.items[i].usuario = item.usuario;
                this.items[i].cedula = item.cedula;
                this.items[i].correo = item.correo;
            }
        }
    }

    guardar(id: number, item: Item) {
        let url = 'http://localhost:3000/api/todo';
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Accept-Encoding, Authorization, X-Requested-With',
            'Access-Control-Allow-Methods': 'POST, PUT, DELETE, GET, OPTIONS'
        });
        if (id == 0)
            this.http.post(url, item, { headers: headers }).subscribe(data => items = data);
        else
            this.http.put(url, item, { headers: headers }).subscribe(data => items = data);
    }
}
