import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var jQuery:any;

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private _elRef: ElementRef) { }

    ngOnInit() { 
        jQuery(this._elRef.nativeElement).UItoTop({ easingType: 'easeOutQuart' });	
    }
}