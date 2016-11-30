import { Component, OnInit, Input } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Product } from '../../models/product/product';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
//import { ProductService } from '../../services/service_product/service_product';


declare var jQuery: any;


@Component({
	moduleId: module.id,
	selector: 'product_detail',
	//providers: [ProductService],
	templateUrl: 'product_detail.component.html'
})
export class ProductDetailComponent implements OnInit {
	list_product_display: Product[];
	product: Product[];
	constructor(
		private router: Router
		// private service_product: ProductService, private router: Router,
		// private route: ActivatedRoute, private location: Location
	) { }

	ngOnInit(): void {
		this.router.events.subscribe((evt) => {
			if (!(evt instanceof NavigationEnd)) {
				return;
			}
			document.body.scrollTop = 0;
		});

		jQuery(function () {
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