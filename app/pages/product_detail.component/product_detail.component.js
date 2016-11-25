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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var router_2 = require('@angular/router');
var service_product_1 = require('../../services/service_product/service_product');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(service_product, router, route, location) {
        this.service_product = service_product;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    ProductDetailComponent.prototype.getproductlist = function () {
        var _this = this;
        this.service_product.getListProductApi().subscribe(function (data) { return _this.list_product_display = data; }, function (error) { return console.log("Lỗi xảy ra ở HTTP service"); }, // in case of failure show this message
        function () { return console.log(_this.list_product_display); });
    };
    ProductDetailComponent.prototype.getproductbyid = function (id) {
        var _this = this;
        this.service_product.getProductByIdApi(id).subscribe(function (data) { return _this.list_product_display = data; }, function (error) { return console.log("Lỗi xảy ra ở HTTP service"); }, // in case of failure show this message
        function () { return console.log(_this.list_product_display); });
    };
    ProductDetailComponent.prototype.ngOnInit = function () {
        // this.route.params.forEach((params: Params) => {
        this.getproductbyid(2);
        // });
        jQuery(function () {
            jQuery('#products').slides({
                preload: true,
                preloadImage: 'img/loading.gif',
                effect: 'slide, fade',
                crossfade: true,
                slideSpeed: 350,
                fadeSpeed: 500,
                generateNextPrev: true,
                generatePagination: false
            });
        });
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product_detail',
            providers: [service_product_1.ProductService],
            templateUrl: 'product_detail.component.html'
        }), 
        __metadata('design:paramtypes', [service_product_1.ProductService, router_2.Router, router_1.ActivatedRoute, common_1.Location])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product_detail.component.js.map