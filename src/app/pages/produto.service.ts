import { Injectable } from '@angular/core';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    { nome: 'Placa de Vídeo GTX 4060', preco: 1986.90, imagem: '../../assets/Placa4060.jpg', categoria: 'Placa de Vídeo' },
    { nome: 'Gabinete Preto', preco: 374.99, imagem: '../../assets/gabinetepreto.jpg', categoria: 'Gabinete' },
    { nome: 'Placa de Vídeo RTX 3060', preco: 1875.80, imagem: '../../assets/rtx3060.jpg', categoria: 'Placa de Vídeo' },
    { nome: 'Memória RAM 16GB', preco: 287.90, imagem: '../../assets/memoriaram16.jpg', categoria: 'Memória RAM' },
    { nome: 'Memória RAM 8GB', preco: 129.90, imagem: '../../assets/memoria8.jpg', categoria: 'Memória RAM' },
    { nome: 'Placa Mãe ASUS', preco: 879.90, imagem: '../../assets/placamae1.jpg', categoria: 'Placa Mãe' },
    { nome: 'Placa Mãe Z890', preco: 899.99, imagem: '../../assets/placamae2.jpg', categoria: 'Placa Mãe' },
    { nome: 'SSD 500GB', preco: 325.99, imagem: '../../assets/ssdkingston.jpg', categoria: 'Armazenamento' },
    { nome: 'HD 500GB', preco: 219.79, imagem: '../../assets/hd500.jpg', categoria: 'Armazenamento' },
    { nome: 'Fonte 750W', preco: 499.99, imagem: '../../assets/fonte2.jpg', categoria: 'Fonte' },
    { nome: 'Fonte 500W', preco: 309.59, imagem: '../../assets/fonte1.jpg', categoria: 'Fonte' },
    { nome: 'Cooler Branco', preco: 690.70, imagem: '../../assets/coolerbranco.jpg', categoria: 'Cooler' },
    { nome: 'Cooler Preto', preco: 758.90, imagem: '../../assets/coolerpreto.jpg', categoria: 'Cooler' }
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }
}
