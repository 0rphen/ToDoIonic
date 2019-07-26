import { Component } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    constructor(public todoList: ToDoService, private router: Router) {

    }

    addItem() {
        this.router.navigateByUrl('/tabs/tab1/add');
    }

    deleteItem(index: number) {
        this.todoList.items.splice(index, 1);
    }

    updateItem(id: number) {
        this.router.navigateByUrl(`/tabs/tab1/add/${id}`);
        console.log(id);
    }
}
