import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar o Router
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cpf: string = '';
  email: string = '';
  address: string = '';
  number: string = '';
  password: string = ''; // Certifique-se de que esta propriedade está declarada

  // Injeta o Router no construtor
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('HomeComponent inicializado.');
  }

  onCardapioClick(): void {
    console.log('Botão clicado!');
    if (!this.cpf || !this.email || !this.address || !this.number || !this.password) {
      alert('Por favor, preencha todos os campos antes de acessar o cardápio.');
    } else {
      alert('Acesso liberado! Redirecionando para o cardápio...');
      this.router.navigate(['/menu']); // Redireciona para a página de cardápio
    }
  }
}
