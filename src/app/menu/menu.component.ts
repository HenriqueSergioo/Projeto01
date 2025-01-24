import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  produtos = [
    { nome: 'Pizza Chocolate & Morango', preco: 55.9, imagem: '../../assets/pizza1.jpg' },
    { nome: 'Pizza de Rúcula', preco: 50.9, imagem: '../../assets/pizza2.jpg' },
    { nome: 'Pizza de Queijo', preco: 52.9, imagem: '../../assets/pizza3.jpg' },
    { nome: 'Pizza Portuguesa', preco: 52.9, imagem: '../../assets/pizza4.jpg' },
    { nome: 'Pizza de Atum', preco: 56.99, imagem: '../../assets/pizza5.jpg' },
    { nome: 'Arroz Doce', preco: 56.99, imagem: '../../assets/pizza6.jpg' }
  ];

  carrinho: { nome: string; preco: number; quantidade: number }[] = [];

  adicionarAoCarrinho(produto: any): void {
    const itemExistente = this.carrinho.find(item => item.nome === produto.nome);
    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      this.carrinho.push({ ...produto, quantidade: 1 });
    }
  }

  removerDoCarrinho(produto: any): void {
    const index = this.carrinho.findIndex(item => item.nome === produto.nome);
    if (index !== -1) {
      this.carrinho[index].quantidade--;
      if (this.carrinho[index].quantidade === 0) {
        this.carrinho.splice(index, 1);
      }
    }
  }

  calcularTotal(): number {
    return this.carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }
}
