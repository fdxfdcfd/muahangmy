import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var jQuery:any;


@Component({
    moduleId: module.id,
    selector: 'product_detail',
    templateUrl: 'product_detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
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