import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  produtos = [
    { nome: 'Cooler Branco', preco: 300.9, imagem: '../../assets/coolerbranco.svg.svg' },
    { nome: 'Cooler Preto', preco: 400.9, imagem: '../../assets/coolerpreto.svg.svg' },
    { nome: 'gabinete Branco', preco: 52.9, imagem: '../../assets/PHOTO-2025-01-27-15-20-00' },
    { nome: 'gabinete Preto', preco: 52.9, imagem: '../../assets/gabinetepreto.svg.svg' },
    { nome: 'placa de video', preco: 56.99, imagem: '../../assets/hd2tb.svg.svg' },
    { nome: 'inteli7', preco: 56.99, imagem: '../../assets/inteli7.svg.svg' }
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
