import { Component } from '@angular/core';

@Component({
  selector: 'app-hardwares',
  templateUrl: './hardwares.component.html',
  styleUrl: './hardwares.component.scss'
})
export class HardwaresComponent {

  carrinho: { nome: string; preco: number; quantidade: number; categoria: string }[] = [];

  produtos :any [] =[
    { nome: 'Placa de Vídeo GTX 4060', preco: 1986.90, imagem: '../../assets/Placa4060.jpg' },
    { nome: 'Gabinete Preto ', preco: 374.99, imagem: '../../assets/gabinetepreto.jpg' },
    { nome: 'Placa de Vídeo RTX 3060 ', preco: 1875.80, imagem: '../../assets/rtx3060.jpg' },
    { nome: 'Memória RAM 16GB', preco: 287.90, imagem: '../../assets/memoriaram16.jpg' },
    { nome: 'HD 500GB', preco: 219.79, imagem: '../../assets/hd500.jpg' },
    { nome: 'Fonte 750W', preco: 499.99, imagem: '../../assets/fonte2.jpg' },
    { nome: 'Placa Mãe ASUS', preco: 879.90, imagem: '../../assets/placamae1.jpg'},
    { nome: 'Gabinete Branco ', preco: 410.45, imagem: '../../assets/gabinetebranco.jpg' },
    { nome: 'Memória RAM 8GB', preco: 129.90, imagem: '../../assets/memoria8.jpg' },
    { nome: 'SSD 500GB', preco: 325.99, imagem: '../../assets/ssdkingston.jpg' },
    { nome: 'Fonte 500W', preco: 309.59, imagem: '../../assets/fonte1.jpg' },
    { nome: 'Placa Mãe Z890', preco: 899.99, imagem: '../../assets/placamae2.jpg'},
    { nome: 'Cooler Branco', preco: 690.70, imagem: '../../assets/coolerbranco.jpg' },
    { nome: 'Cooler Preto', preco: 758.90, imagem: '../../assets/coolerpreto.jpg'}
  ];

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




