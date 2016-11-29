// core
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
// app
import { AppComponent }   from './app.component';
// animate
import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

//pages
import { HomeComponent } from './pages/home.component/home.component';
import { ProductDetailComponent } from './pages/product_detail.component/product_detail.component';
// import { NotFoundComponent } from './pages/notfound.component/notfound.component';
// import { Four04Component } from './pages/404.component/404.component';
//widgets
import { WidHeaderComponent } from './widgets/wid_header.component/wid_header.component';
import { WidFooterComponent } from './widgets/wid_footer.component/wid_footer.component';
//modules
import { ModHeaderTopComponent } from './modules/mod_header_top.component/mod_header_top.component';
import { ModMenuComponent } from './modules/mod_menu.component/mod_menu.component';
import { ModHeaderSlideComponent } from './modules/mod_header_slide.component/mod_header_slide.component';
import { ModContentTopComponent } from './modules/mod_content_top.component/mod_content_top.component';
import { ModGroupProductComponent } from './modules/mod_group_product.component/mod_group_product.component';
import { ModDetailProductComponent } from './modules/mod_detail_product.component/mod_detail_product.component';
//services
import { ProductService } from './services/service_product/service_product';
import { MenuService } from './services/service_menu/service_menu';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule 
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    WidHeaderComponent,
    WidFooterComponent,
    ModHeaderTopComponent,
    ModMenuComponent,
    ModHeaderSlideComponent,
    ProductDetailComponent,
    ModContentTopComponent,
    ModGroupProductComponent,
    ModDetailProductComponent
    
    // NotFoundComponent,
    // Four04Component
    ],
    providers: [
      ProductService,
      MenuService
      ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
