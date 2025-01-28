// menu.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  produtos = [
<<<<<<< HEAD
    { nome: 'Cooler Branco', preco: 300.9, imagem: '../../assets/coolerbranco.svg.svg' },
    { nome: 'Cooler Preto', preco: 400.9, imagem: '../../assets/coolerpreto.svg.svg' },
    { nome: 'gabinete Branco', preco: 52.9, imagem: '../../assets/gabinetebranco.svg.svg' },
    { nome: 'gabinete Preto', preco: 52.9, imagem: '../../assets/gabinetepreto.svg.svg' },
    { nome: '', preco: 56.99, imagem: '' },
    { nome: '', preco: 56.99, imagem: '' }
=======
    { nome: 'Placa de Vídeo GTX 3060', preco: 2899.99, imagem: '../../assets/placa-de-video.jpg' },
    { nome: 'Processador Intel i7', preco: 1899.99, imagem: '../../assets/processador.jpg' },
    { nome: 'Memória RAM 16GB', preco: 699.99, imagem: '../../assets/ram.jpg' },
    { nome: 'SSD 512GB', preco: 399.99, imagem: '../../assets/ssd.jpg' },
    { nome: 'Fonte 750W', preco: 499.99, imagem: '../../assets/fonte.jpg' },
    { nome: 'Placa Mãe ASUS', preco: 899.99, imagem: '../../assets/placa-mae.jpg' }
>>>>>>> origin/devHenrique
  ];

  carrinho: { nome: string; preco: number; quantidade: number }[] = [];
  carrinhoAberto: boolean = false;

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

  toggleCarrinho(): void {
    this.carrinhoAberto = !this.carrinhoAberto;
  }
}
