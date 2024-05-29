import { v4 as uuidv4 } from "uuid";
import Produto from "./Produto";

class Cliente {
  nome: string;
  id: string;
  produtosComprados: Produto[];
  constructor(nome: string) {
    this.nome = nome;
    this.id = uuidv4();
    this.produtosComprados = [];
  }
  public comprar(produto: Produto, quantidade: number) {
    if (produto.venderProduto(quantidade)) {
      this.produtosComprados.push(produto);
      return "Compra realizada!";
    } else {
      return "Compra mal-sucedida!";
    }
  }
}
export default Cliente;
