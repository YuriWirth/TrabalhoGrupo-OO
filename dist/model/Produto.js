"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    venderProduto(quantidade) {
        if (this.quantidade >= quantidade) {
            this.quantidade -= quantidade;
            return true;
        }
        else {
            return false;
        }
    }
    reporProduto(quantidade) {
        this.quantidade += quantidade;
        return "Produto adicionado ao estoque com sucesso!";
    }
}
exports.default = Produto;
