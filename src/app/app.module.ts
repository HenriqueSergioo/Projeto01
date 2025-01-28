import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ConfirmPaymentComponent } from './confirm-payment/confirm-payment.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { NavBarComponent } from './nav-bar/nav-bar.component';
=======
import { HardwaresComponent } from './pages/hardwares/hardwares.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { BuildpcComponent } from './pages/buildpc/buildpc.component';





>>>>>>> origin/devHenrique


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
MenuComponent,
    ConfirmPaymentComponent,
    ConfirmOrderComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    NavBarComponent,
=======
    HardwaresComponent,
    BudgetComponent,
    BuildpcComponent,
>>>>>>> origin/devHenrique
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
