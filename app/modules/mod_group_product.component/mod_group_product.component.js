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
var ModGroupProductComponent = (function () {
    function ModGroupProductComponent(service_product, router) {
        this.service_product = service_product;
        this.router = router;
        this.product_type = 2;
    }
    ModGroupProductComponent.prototype.getProduct = function () {
        var _this = this;
        this.service_product.getListProduct()
            .subscribe(function (data) { return _this.products = data; }, function (error) { return console.log("Lỗi xảy ra ở HTTP service"); });
    };
    ModGroupProductComponent.prototype.getProductByProductType = function (product_type) {
        var _this = this;
        this.service_product.getProductByProductType(product_type)
            .subscribe(function (data) { return _this.products = data; }, function (error) { return console.log("Lỗi xảy ra ở HTTP service"); });
    };
    ModGroupProductComponent.prototype.ngOnInit = function () {
        this.getProductByProductType(this.product_type);
        console.log(this.products);
        console.log(this.product_type);
    };
    ModGroupProductComponent.prototype.gotoDetail = function (product) {
        var link = ['/san-pham', product.id];
        this.router.navigate(link);
    };
    ModGroupProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_group_product',
            templateUrl: 'mod_group_product.component.html',
            inputs: ['product_type']
        }), 
        __metadata('design:paramtypes', [service_product_1.ProductService, router_1.Router])
    ], ModGroupProductComponent);
    return ModGroupProductComponent;
}());
exports.ModGroupProductComponent = ModGroupProductComponent;
//# sourceMappingURL=mod_group_product.component.js.map