import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category/category';
import { CategoryService } from '../../services/service_category/service_category';

import { Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Component({
    moduleId: module.id,
    selector: 'mod_category_product',
    templateUrl: 'mod_category_product.component.html'
})
export class ModCategoryProductComponent implements OnInit {
    categories: Category[];
    constructor(private service_category: CategoryService) { }
     getCategoryList() {
        this.service_category.getCategoryList()
            .subscribe(
            data => this.categories = data,
            error => console.log("Lỗi xảy ra ở HTTP service"),
            () => console.log(this.categories)
            );
    }
    ngOnInit() { 
        this.getCategoryList();
    }
}