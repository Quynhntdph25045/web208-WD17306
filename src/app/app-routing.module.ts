import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'admin', component: AdminLayoutComponent, children: [
    { path: '', redirectTo: 'productlist', pathMatch: 'full' },
    {path: 'productlist', component: ProductListComponent},
    {path: 'productlist/add', component: ProductAddComponent},
    {path: 'productlist/:id/edit', component: ProductEditComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
