import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',

})
export class HomeComponent implements OnInit {
    constructor(private _elRef: ElementRef, private router: Router) { }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        });
        jQuery(this._elRef.nativeElement).UItoTop({ easingType: 'easeOutQuart' });
    }
}