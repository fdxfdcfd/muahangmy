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
var service_product_1 = require('../../services/service_product/service_product');
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
require('rxjs/Rx');
var ModProductGridComponent = (function () {
    function ModProductGridComponent(service_product, router) {
        this.service_product = service_product;
        this.router = router;
        this.product_type = 2;
    }
    ModProductGridComponent.prototype.getProductByProductType = function (product_type) {
        var _this = this;
        this.service_product.getProductByProductType(product_type)
            .subscribe(function (data) { return _this.products = data; }, function (error) { return console.log("Lỗi xảy ra ở HTTP service"); });
    };
    ModProductGridComponent.prototype.ngOnInit = function () {
        this.getProductByProductType(this.product_type);
    };
    ModProductGridComponent.prototype.gotoDetail = function (product) {
        var link = ['/san-pham', product.id];
        this.router.navigate(link);
    };
    ModProductGridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_product_grid',
            templateUrl: 'mod_product_grid.component.html',
            inputs: ['product_type']
        }), 
        __metadata('design:paramtypes', [service_product_1.ProductService, router_1.Router])
    ], ModProductGridComponent);
    return ModProductGridComponent;
}());
exports.ModProductGridComponent = ModProductGridComponent;
//# sourceMappingURL=mod_product_grid.component.js.map