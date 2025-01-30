import { Injectable } from '@angular/core';
import { Produto } from '../../app/model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    new Produto(1, 'Placa de Vídeo GTX 4060', 1986.90, '../../assets/Placa4060.jpg', 'Placas de Vídeo'),
    new Produto(2, 'Gabinete Preto', 374.99, '../../assets/gabinetepreto.jpg', 'Gabinetes'),
    new Produto(3, 'Placa de Vídeo RTX 3060', 1875.80, '../../assets/rtx3060.jpg', 'Placas de Vídeo'),
    new Produto(4, 'Memória RAM 16GB', 287.90, '../../assets/memoriaram16.jpg', 'Memória RAM'),
    new Produto(5, 'HD 500GB', 219.79, '../../assets/hd500.jpg', 'Armazenamento'),
    new Produto(6, 'Fonte 750W', 499.99, '../../assets/fonte2.jpg', 'Fontes'),
    new Produto(7, 'Placa Mãe ASUS', 879.90, '../../assets/placamae1.jpg', 'Placas Mãe'),
    new Produto(8, 'Gabinete Branco', 410.45, '../../assets/gabinetebranco.jpg', 'Gabinetes'),
    new Produto(9, 'Memória RAM 8GB', 129.90, '../../assets/memoria8.jpg', 'Memória RAM'),
    new Produto(10, 'SSD 500GB', 325.99, '../../assets/ssdkingston.jpg', 'Armazenamento'),
    new Produto(11, 'Fonte 500W', 309.59, '../../assets/fonte1.jpg', 'Fontes'),
    new Produto(12, 'Placa Mãe Z890', 899.99, '../../assets/placamae2.jpg', 'Placas Mãe'),
    new Produto(13, 'Cooler Branco', 690.70, '../../assets/coolerbranco.jpg', 'Coolers'),
    new Produto(14, 'Cooler Preto', 758.90, '../../assets/coolerpreto.jpg', 'Coolers')
  ];

  constructor() {}

  getProdutos(): Produto[] {
    return this.produtos;
  }
}
