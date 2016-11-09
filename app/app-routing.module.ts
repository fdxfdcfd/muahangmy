import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './pages/home.component/home.component';
import { ProductDetailComponent } from './pages/product_detail.component/product_detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/trang-chu', pathMatch: 'full' },
  { path: 'trang-chu',  component: HomeComponent },
  { path: 'san-pham',  component: ProductDetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
