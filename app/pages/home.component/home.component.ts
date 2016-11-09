import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private _elRef: ElementRef) { }

    ngOnInit() { 
        $(this._elRef.nativeElement).UItoTop({ easingType: 'easeOutQuart' });	
    }
}