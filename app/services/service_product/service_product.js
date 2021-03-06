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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/Rx');
require('rxjs/add/operator/toPromise');
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        // url_api = "/muahangmy/service_api/api_product.php";
        this.url_api = "/muahangmy/app/service_api/api_product.php";
    }
    ProductService.prototype.getListProduct = function () {
        return this.http.get(this.url_api).map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductById = function (id) {
        var body = JSON.stringify({ "id": id });
        var option = new http_2.RequestOptions({ method: "post" });
        return this.http.post(this.url_api, body, option).map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductByProductTypeLimit = function (product_type) {
        var body = JSON.stringify({ "product_type_limit": product_type });
        var option = new http_2.RequestOptions({ method: "post" });
        return this.http.post(this.url_api, body, option).map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductByProductType = function (product_type) {
        var body = JSON.stringify({ "product_type": product_type });
        var option = new http_2.RequestOptions({ method: "post" });
        return this.http.post(this.url_api, body, option).map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=service_product.js.map