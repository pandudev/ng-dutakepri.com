import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    data: {
      solidNavbar: false
    },
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'product',
    data: {
      solidNavbar: true
    },
    loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'about',
    data: {
      solidNavbar: true
    },
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'contact',
    data: {
      solidNavbar: true,
      onContact: true
    },
    loadChildren: './contact/contact.module#ContactModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
