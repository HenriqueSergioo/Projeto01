import { BudgetComponent } from './../pages/budget/budget.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  isNavHidden = false; // Estado da barra lateral

  toggleNav() {
    this.isNavHidden = !this.isNavHidden; // Alterna entre mostrar/esconder
  }
}
