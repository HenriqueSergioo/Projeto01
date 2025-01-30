import { Component } from '@angular/core';

@Component({
  selector: 'app-buildpc',
  templateUrl: '../buildpc/buildpc.component.html',
  styleUrls: ['./buildpc.component.scss']
})
export class BuildpcComponent {
  categorias: string[] = ['Memória RAM', 'Placas de Vídeo', 'Armazenamento', 'Fontes', 'Placas Mãe', 'Processador'];  // Adicionada a categoria Processador
  produtos = [
    { nome: 'Placa de Vídeo GTX 4060', preco: 1986.90, imagem: '../../assets/Placa4060.jpg', categoria: 'Placas de Vídeo' },
    { nome: 'Placa de Vídeo RTX 3060', preco: 1875.80, imagem: '../../assets/rtx3060.jpg', categoria: 'Placas de Vídeo' },
    { nome: 'Memória RAM 16GB', preco: 287.90, imagem: '../../assets/memoriaram16.jpg', categoria: 'Memória RAM' },
    { nome: 'Memória RAM 8GB', preco: 129.90, imagem: '../../assets/memoria8.jpg', categoria: 'Memória RAM' },
    { nome: 'HD 500GB', preco: 219.79, imagem: '../../assets/hd500.jpg', categoria: 'Armazenamento' },
    { nome: 'SSD 500GB', preco: 325.99, imagem: '../../assets/ssdkingston.jpg', categoria: 'Armazenamento' },
    { nome: 'Fonte 750W', preco: 499.99, imagem: '../../assets/fonte2.jpg', categoria: 'Fontes' },
    { nome: 'Fonte 500W', preco: 309.59, imagem: '../../assets/fonte1.jpg', categoria: 'Fontes' },
    { nome: 'Placa Mãe ASUS', preco: 879.90, imagem: '../../assets/placamae1.jpg', categoria: 'Placas Mãe' },
    { nome: 'Placa Mãe Z890', preco: 899.99, imagem: '../../assets/placamae2.jpg', categoria: 'Placas Mãe' },
    { nome: 'Processador I7', preco: 758.90, imagem: '../../assets/processadorI7.jpg', categoria: 'Processador' },
    { nome: 'Processador AMD Ryzen7', preco: 758.90, imagem: '../../assets/processadorRyzen7.jpg', categoria: 'Processador' }
  ];


  carrinho: { nome: string; preco: number; quantidade: number; categoria: string }[] = [];
  carrinhoAberto: boolean = false;

  // Função chamada quando o usuário seleciona um produto
  onProdutoSelecionado(event: any, categoria: string): void {
    const nomeProdutoSelecionado = event.target.value;

    // Encontrar o produto com base no nome e categoria
    const produtoSelecionado = this.produtos.find(p => p.nome === nomeProdutoSelecionado && p.categoria === categoria);

    if (produtoSelecionado) {
      this.adicionarAoCarrinho(produtoSelecionado);
    }
  }

  // Função para adicionar ao carrinho
  adicionarAoCarrinho(produto: any): void {
    const itemExistente = this.carrinho.find(item => item.nome === produto.nome);
    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      this.carrinho.push({ ...produto, quantidade: 1 });
    }
  }

  // Função para remover do carrinho
  removerDoCarrinho(produto: any): void {
    const index = this.carrinho.findIndex(item => item.nome === produto.nome);
    if (index !== -1) {
      this.carrinho[index].quantidade--;
      if (this.carrinho[index].quantidade === 0) {
        this.carrinho.splice(index, 1);
      }
    }
  }

  // Função para calcular o total do carrinho
  calcularTotal(): number {
    return this.carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  // Função para abrir/fechar o carrinho
  toggleCarrinho(): void {
    this.carrinhoAberto = !this.carrinhoAberto;
  }
}
