import Cliente from "./Cliente";
import Produto from "./Produto";

class Loja {
  produtos: Produto[];
  clientes: Cliente[];
  constructor() {
    this.produtos = [];
    this.clientes = [];
  }
  public adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
    console.log("Produto adicionado com sucesso!", this.produtos);
  }
  public adicionarCliente(cliente: Cliente) {
    this.clientes.push(cliente);

    console.log("Cliente registrado com sucesso!", this.clientes);
  }
  public fazerVenda(
    idCliente: string,
    nomeProduto: Produto,
    quantidade: number
  ) {
    let clientePesquisado = this.clientes.find(
      (cliente) => cliente.id === idCliente
    );
    let produtoPesquisado = this.produtos.find(
      (produto) => produto.quantidade >= quantidade
    );
    if (clientePesquisado && produtoPesquisado) {
      clientePesquisado.comprar(nomeProduto, quantidade);
      console.log("Venda efetuada com sucesso!");
    } else {
      console.log("Cliente ou produto não encontrado!");
    }
  }
}

export default Loja;
