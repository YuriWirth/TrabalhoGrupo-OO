class Produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  public venderProduto(quantidade: number) {
    if (this.quantidade >= quantidade) {
      this.quantidade -= quantidade;
      return true;
    } else {
      return false;
    }
  }

  public reporProduto(quantidade: number) {
    this.quantidade += quantidade;
    return "Produto adicionado ao estoque com sucesso!";
  }
}

export default Produto;
