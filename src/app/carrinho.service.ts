import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private itens: any[] = [];

  adicionarAoCarrinho(item: any) {
    const existente = this.itens.find(i => i.nome === item.nome);
    if (existente) {
      existente.quantidade++;
    } else {
      this.itens.push({ ...item, quantidade: 1 });
    }
  }

  obterItens() {
    return this.itens;
  }

  limparCarrinho() {
    this.itens = [];
  }
}
