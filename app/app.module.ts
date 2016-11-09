import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { AppRoutingModule }     from './app-routing.module';


//pages
import { HomeComponent } from './pages/home.component/home.component';
//widgets
import { WidHeaderComponent } from './widgets/wid_header.component/wid_header.component';
import { WidFooterComponent } from './widgets/wid_footer.component/wid_footer.component';
//modules
import { ModHeaderTopComponent } from './modules/mod_header_top.component/mod_header_top.component';
import { ModMenuComponent } from './modules/mod_menu.component/mod_menu.component';
import { ModHeaderSlideComponent } from './modules/mod_header_slide.component/mod_header_slide.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    WidHeaderComponent,
    WidFooterComponent,
    ModHeaderTopComponent,
    ModMenuComponent,
    ModHeaderSlideComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
