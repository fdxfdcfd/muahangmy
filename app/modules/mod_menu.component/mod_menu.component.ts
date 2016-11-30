import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu/menu';
import { MenuService } from '../../services/service_menu/service_menu';

import { Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Component({
    moduleId: module.id,
    selector: 'mod_menu',
    templateUrl: 'mod_menu.component.html'
})
export class ModMenuComponent implements OnInit {
    menus: Menu[];
    constructor( private menu_service: MenuService ) { }

    getListMenu() {
        this.menu_service.getListMenu()
            .subscribe(
            data => this.menus = data,
            error => console.log("Lỗi xảy ra ở HTTP service")
            );
    }
    ngOnInit() {
        this.getListMenu();
    }
    goToPage(menu: Menu): void {
    }
}