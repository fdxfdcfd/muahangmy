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
var ModHeaderSlideComponent = (function () {
    function ModHeaderSlideComponent() {
        this.state = 'inactive';
    }
    ModHeaderSlideComponent.prototype.toggleState = function () {
        console.log(this.state);
        if (this.state == 'inactive') {
            this.state = 'active';
        }
        else {
            this.state = 'inactive';
        }
    };
    ModHeaderSlideComponent.prototype.ngOnInit = function () {
    };
    ModHeaderSlideComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_header_slide',
            animations: [
                core_2.trigger('slideState', [
                    core_2.state('inactive', core_2.style({
                        "opacity": 1,
                        transform: 'translate(0)'
                    })),
                    core_2.state('active', core_2.style({
                        "opacity": 0,
                        transform: 'translate(-100%)'
                    })),
                    core_2.transition('inactive => active', core_2.animate('1000ms ease-in')),
                    core_2.transition('active => inactive', core_2.animate('1000ms ease-out'))
                ])
            ],
            templateUrl: 'mod_header_slide.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ModHeaderSlideComponent);
    return ModHeaderSlideComponent;
}());
exports.ModHeaderSlideComponent = ModHeaderSlideComponent;
//# sourceMappingURL=mod_header_slide.component.js.map