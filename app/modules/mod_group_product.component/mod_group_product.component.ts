import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product/product';
import { ProductService } from '../../services/service_product/service_product';

import { Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Component({
    moduleId: module.id,
    selector: 'mod_group_product',
    templateUrl: 'mod_group_product.component.html'
})
export class ModGroupProductComponent implements OnInit {
    errorMessage: string;
    products: Product[];
    constructor(private service_product: ProductService, private router: Router) { }
    getProduct() {
        this.service_product.getListProduct()
            .subscribe(
            data => this.products = data,
            error => console.log("Lỗi xảy ra ở HTTP service")
            );
    }
    getProductByNew() {
        this.service_product.getProductbyNew(1)
            .subscribe(
            data => this.products = data,
            error => console.log("Lỗi xảy ra ở HTTP service")
            );
    }
    ngOnInit() {
        this.getProductByNew();
    }
     gotoDetail(product: Product): void {
        let link = ['/san-pham', product.id];
        this.router.navigate(link);
    }

}