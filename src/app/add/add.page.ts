import { Component, OnInit } from '@angular/core';
import { Item } from '../modelos/items.model';
import { ToDoService } from '../services/to-do.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
    item: Item;
    id: number = 0;
    nombreItem: string = '';
    correoItem: string = '';
    cedulaItem: number = 0;

    constructor(private todoList: ToDoService, private router: Router, private router2: ActivatedRoute) {
        const id = this.router2.snapshot.paramMap.get('itemId');
        if (id.length > 0)
            this.loadItem(id);
    }

    ngOnInit() {
    }

    agregarItem() {
        if (this.nombreItem == '' || this.correoItem == '' || this.cedulaItem == 0)
            return;
        const nuevoItem: Item = new Item(this.nombreItem, this.correoItem, this.cedulaItem);
        this.nombreItem = '';
        this.correoItem = '';
        this.cedulaItem = 0;
        if (this.id == 0)
            this.todoList.crearItem(nuevoItem);
        else
            this.todoList.editarItem(nuevoItem, this.id);
        this.todoList.guardar(this.id, nuevoItem);
        this.router.navigateByUrl('/tabs/tab1');
    }

    loadItem(id: number | string) {
        id = Number(id);
        let obj: Item = this.todoList.items.find(item => item.id === id);
        this.item = obj;
        this.nombreItem = this.item.usuario;
        this.correoItem = this.item.correo;
        this.cedulaItem = this.item.cedula;
        this.id = id;
    }
}
