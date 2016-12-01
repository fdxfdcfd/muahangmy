import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
    moduleId: module.id,
    selector: 'delivery',
    templateUrl: 'delivery.component.html'
})
export class DeliveryComponent implements OnInit {
    constructor(private _elRef: ElementRef) { }
    ngOnInit() {
        document.body.scrollTop = 0;
        jQuery(this._elRef.nativeElement).UItoTop({ easingType: 'easeOutQuart' });
    }
}