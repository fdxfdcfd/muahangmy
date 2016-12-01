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
var service_menu_1 = require('../../services/service_menu/service_menu');
require('rxjs/add/operator/map');
require('rxjs/Rx');
var ModMenuComponent = (function () {
    function ModMenuComponent(menu_service) {
        this.menu_service = menu_service;
    }
    ModMenuComponent.prototype.getListMenu = function () {
        var _this = this;
        this.menu_service.getListMenu()
            .subscribe(function (data) { return _this.menus = data; }, function (error) { return console.log("Lỗi xảy ra ở HTTP service"); });
    };
    ModMenuComponent.prototype.ngOnInit = function () {
        this.getListMenu();
    };
    ModMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_menu',
            templateUrl: 'mod_menu.component.html'
        }), 
        __metadata('design:paramtypes', [service_menu_1.MenuService])
    ], ModMenuComponent);
    return ModMenuComponent;
}());
exports.ModMenuComponent = ModMenuComponent;
//# sourceMappingURL=mod_menu.component.js.map