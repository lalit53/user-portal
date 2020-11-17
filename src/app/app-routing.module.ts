
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
// import { ServicesComponent } from './services/services.component';
// import { CompaniesListComponent } from './companies-list/companies-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent}

  // { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  // { path: 'companies-list', component: CompaniesListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
