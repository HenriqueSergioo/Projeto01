export class Produto {
  constructor(
    
    public nome: string,     // Nome do produto
    public preco: number,    // Preço do produto
    public imagem: string,   // Caminho da imagem
    public categoria: string // Categoria do produto (ex: "Memória RAM", "Placa de Vídeo")
  ) {}
}
