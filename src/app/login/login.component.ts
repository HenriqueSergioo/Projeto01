import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Verifique se os campos estão preenchidos
    if (this.email && this.password) {
      // Acessa a página de menu após a validação
      this.router.navigate(['/menu']);
    } else {
      alert('Por favor, preencha todos os campos');
    }
  }
}
