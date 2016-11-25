import { Component, OnInit, Input } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Product } from '../../models/product/product';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../../services/service_product/service_product';

declare var jQuery:any;


@Component({
    moduleId: module.id,
    selector: 'product_detail',
	providers: [ProductService],
    templateUrl: 'product_detail.component.html'
})
export class ProductDetailComponent implements OnInit {
	list_product_display: Product[];
    constructor(private service_product: ProductService, private router: Router,
        private route: ActivatedRoute, private location: Location) { }
	getproductlist(){
		this.service_product.getListProductApi().subscribe(
			data=> this.list_product_display= data,
			 error => console.log("Lỗi xảy ra ở HTTP service"), // in case of failure show this message
			  () => console.log(this.list_product_display)
		);
	}
	getproductbyid(id){
		this.service_product.getProductByIdApi(id).subscribe(
			data=> this.list_product_display= data,
			 error => console.log("Lỗi xảy ra ở HTTP service"), // in case of failure show this message
			  () => console.log(this.list_product_display)
		);
	}
	
    ngOnInit(): void { 
		// this.route.params.forEach((params: Params) => {
    	this.getproductbyid(2);
        // });

        jQuery(function(){
			jQuery('#products').slides({
				preload: true,
				preloadImage: 'img/loading.gif',
				effect: 'slide, fade',
				crossfade: true,
				slideSpeed: 350,
				fadeSpeed: 500,
				generateNextPrev: true,
				generatePagination: false
			});
		});
    }
}