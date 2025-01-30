// menu.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  produtos = [

    { nome: 'Cooler Branco', preco: 300.9, imagem: '../../assets/coolerbranco.svg.svg', categoria: 'Placa Mãe' },
    { nome: 'Cooler Preto', preco: 400.9, imagem: '../../assets/coolerpreto.svg.svg', categoria: 'Placa Mãe' },
    { nome: 'Gabinete Branco', preco: 52.9, imagem: '../../assets/gabinetebranco.svg.svg', categoria: 'Placa Mãe' },
    { nome: 'Gabinete Preto', preco: 52.9, imagem: '../../assets/gabinetepreto.svg.svg', categoria: 'Placa Mãe' },
    { nome: 'Placa de Vídeo GTX 3060', preco: 2899.99, imagem: '../../assets/placa-de-video.jpg', categoria: 'Placa Mãe' },
    { nome: 'Processador Intel i7', preco: 1899.99, imagem: '../../assets/processador.jpg', categoria: 'Placa Mãe' },
    { nome: 'Memória RAM 16GB', preco: 699.99, imagem: '../../assets/ram.jpg', categoria: 'Placa Mãe' },
    { nome: 'SSD 512GB', preco: 399.99, imagem: '../../assets/ssd.jpg', categoria: 'Placa Mãe' },
    { nome: 'Fonte 750W', preco: 499.99, imagem: '../../assets/fonte.jpg', categoria: 'Placa Mãe' },
    { nome: 'Placa Mãe ASUS', preco: 899.99, imagem: '../../assets/placa-mae.jpg', categoria: 'Placa Mãe' }

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
