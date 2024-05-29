"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    constructor() {
        this.produtos = [];
        this.clientes = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        console.log("Produto adicionado com sucesso!", this.produtos);
    }
    adicionarCliente(cliente) {
        this.clientes.push(cliente);
        console.log("Cliente registrado com sucesso!", this.clientes);
    }
    fazerVenda(idCliente, nomeProduto, quantidade) {
        let clientePesquisado = this.clientes.find((cliente) => cliente.id === idCliente);
        let produtoPesquisado = this.produtos.find((produto) => produto.quantidade >= quantidade);
        if (clientePesquisado && produtoPesquisado) {
            clientePesquisado.comprar(nomeProduto, quantidade);
            console.log("Venda efetuada com sucesso!");
        }
        else {
            console.log("Cliente ou produto não encontrado!");
        }
    }
}
exports.default = Loja;
