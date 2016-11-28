import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product/product';
import { ProductService } from '../../services/service_product/service_product';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'mod_detail_product',
    providers: [ProductService],
    templateUrl: 'mod_detail_product.component.html'
})
export class ModDetailProductComponent implements OnInit {
    product: Product;
    constructor(private route: ActivatedRoute,
                private router: Router, 
                private service_product: ProductService) {
                    this.getprouductdetail();
                 }

    getprouductdetail(){
         this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.service_product.getProductById(id).subscribe(
                data => this.product = data.shift(), // put the data returned from the server in our variable
                error => console.log("Lỗi xảy ra ở HTTP service"), // in case of failure show this message
                () => console.log(this.product)//run this code in all cases
            );
        });
    }
    ngOnInit() {
        console.log(123);
        console.log(this.product);
    }

}