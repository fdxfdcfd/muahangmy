"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var router_1 = require('@angular/router');
var WidFooterComponent = (function () {
    function WidFooterComponent(_elRef, router) {
        this._elRef = _elRef;
        this.router = router;
    }
    WidFooterComponent.prototype.ngOnInit = function () {
        document.body.scrollTop = 0;
        jQuery(this._elRef.nativeElement).UItoTop({ easingType: 'easeOutQuart' });
    };
    WidFooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wid_footer',
            templateUrl: 'wid_footer.component.html'
        }), 
        __metadata('design:paramtypes', [core_2.ElementRef, router_1.Router])
    ], WidFooterComponent);
    return WidFooterComponent;
}());
exports.WidFooterComponent = WidFooterComponent;
//# sourceMappingURL=wid_footer.component.js.map