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
// core
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_routing_module_1 = require('./app-routing.module');
var http_1 = require('@angular/http');
// app
var app_component_1 = require('./app.component');
//pages
var home_component_1 = require('./pages/home.component/home.component');
var product_detail_component_1 = require('./pages/product_detail.component/product_detail.component');
// import { NotFoundComponent } from './pages/notfound.component/notfound.component';
// import { Four04Component } from './pages/404.component/404.component';
//widgets
var wid_header_component_1 = require('./widgets/wid_header.component/wid_header.component');
var wid_footer_component_1 = require('./widgets/wid_footer.component/wid_footer.component');
//modules
var mod_header_top_component_1 = require('./modules/mod_header_top.component/mod_header_top.component');
var mod_menu_component_1 = require('./modules/mod_menu.component/mod_menu.component');
var mod_header_slide_component_1 = require('./modules/mod_header_slide.component/mod_header_slide.component');
var mod_content_top_component_1 = require('./modules/mod_content_top.component/mod_content_top.component');
var mod_group_product_component_1 = require('./modules/mod_group_product.component/mod_group_product.component');
var mod_detail_product_component_1 = require('./modules/mod_detail_product.component/mod_detail_product.component');
//services
var service_product_1 = require('./services/service_product/service_product');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                wid_header_component_1.WidHeaderComponent,
                wid_footer_component_1.WidFooterComponent,
                mod_header_top_component_1.ModHeaderTopComponent,
                mod_menu_component_1.ModMenuComponent,
                mod_header_slide_component_1.ModHeaderSlideComponent,
                product_detail_component_1.ProductDetailComponent,
                mod_content_top_component_1.ModContentTopComponent,
                mod_group_product_component_1.ModGroupProductComponent,
                mod_detail_product_component_1.ModDetailProductComponent
            ],
            providers: [
                service_product_1.ProductService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map