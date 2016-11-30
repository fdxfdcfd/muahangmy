import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './pages/home.component/home.component';
import { ProductDetailComponent } from './pages/product_detail.component/product_detail.component';
import { PageNotFoundComponent } from './pages/page_not_found.component/page_not_found.component';

const routes: Routes = [
  
  { path: 'trang-chu',  component: HomeComponent },
  { path: 'san-pham/:id',  component: ProductDetailComponent },
  { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
