import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product/product';
import { ProductService } from '../../services/service_product/service_product';

import { Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Component({
    moduleId: module.id,
    selector: 'mod_product_grid',
    templateUrl: 'mod_product_grid.component.html',
    inputs: ['product_type']
})
export class ModProductGridComponent implements OnInit {
    product_type=2;
    errorMessage: string;
    products: Product[];
    constructor(private service_product: ProductService, private router: Router) { }
    getProductByProductType(product_type) {
        this.service_product.getProductByProductType(product_type)
            .subscribe(
            data => this.products = data,
            error => console.log("Lỗi xảy ra ở HTTP service"),
            );
    }
    ngOnInit() {
        this.getProductByProductType(this.product_type);
    }
     gotoDetail(product: Product): void {
        let link = ['/san-pham', product.id];
        this.router.navigate(link);
    }

}