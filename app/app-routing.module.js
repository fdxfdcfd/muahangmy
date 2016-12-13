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
var home_component_1 = require('./pages/home.component/home.component');
var product_detail_component_1 = require('./pages/product_detail.component/product_detail.component');
var page_not_found_component_1 = require('./pages/page_not_found.component/page_not_found.component');
var about_component_1 = require('./pages/about.component/about.component');
var delivery_component_1 = require('./pages/delivery.component/delivery.component');
var news_component_1 = require('./pages/news.component/news.component');
var contact_component_1 = require('./pages/contact.component/contact.component');
var product_grid_component_1 = require('./pages/product_grid.component/product_grid.component');
var routes = [
    { path: 'trang-chu', component: home_component_1.HomeComponent },
    { path: 'san-pham/:id', component: product_detail_component_1.ProductDetailComponent },
    { path: 've-chung-toi', component: about_component_1.AboutComponent },
    { path: 'giao-hang', component: delivery_component_1.DeliveryComponent },
    { path: 'tin-tuc', component: news_component_1.NewsComponent },
    { path: 'lien-he', component: contact_component_1.ContactComponent },
    { path: 'san-pham-moi', component: product_grid_component_1.ProductGridComponent },
    { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
    { path: '404', component: page_not_found_component_1.PageNotFoundComponent },
    { path: '**', redirectTo: '404' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map