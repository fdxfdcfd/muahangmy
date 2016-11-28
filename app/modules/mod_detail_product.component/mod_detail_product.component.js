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
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/map');
require('rxjs/Rx');
var ModDetailProductComponent = (function () {
    function ModDetailProductComponent(route, router, service_product) {
        this.route = route;
        this.router = router;
        this.service_product = service_product;
        this.getprouductdetail();
    }
    ModDetailProductComponent.prototype.getprouductdetail = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.service_product.getProductById(id).subscribe(function (data) { return _this.product = data.shift(); }, // put the data returned from the server in our variable
            function (// put the data returned from the server in our variable
                error) { return console.log("Lỗi xảy ra ở HTTP service"); }, // in case of failure show this message
            function () { return console.log(_this.product); } //run this code in all cases
            );
        });
    };
    ModDetailProductComponent.prototype.ngOnInit = function () {
    };
    ModDetailProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_detail_product',
            providers: [service_product_1.ProductService],
            templateUrl: 'mod_detail_product.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, service_product_1.ProductService])
    ], ModDetailProductComponent);
    return ModDetailProductComponent;
}());
exports.ModDetailProductComponent = ModDetailProductComponent;
//# sourceMappingURL=mod_detail_product.component.js.map