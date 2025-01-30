import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ConfirmPaymentComponent } from './confirm-payment/confirm-payment.component';
import { HardwaresComponent } from './pages/hardwares/hardwares.component';
import { BuildpcComponent } from './pages/buildpc/buildpc.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'confirm-order', component: ConfirmOrderComponent},
  {path: 'confirm-payment', component: ConfirmPaymentComponent},
  {path: 'hardware',component: HardwaresComponent},
  {path: 'build', component:BuildpcComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
