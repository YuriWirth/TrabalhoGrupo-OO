"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Cliente {
    constructor(nome) {
        this.nome = nome;
        this.id = (0, uuid_1.v4)();
        this.produtosComprados = [];
    }
    comprar(produto, quantidade) {
        if (produto.venderProduto(quantidade)) {
            this.produtosComprados.push(produto);
            return "Compra realizada!";
        }
        else {
            return "Compra mal-sucedida!";
        }
    }
}
exports.default = Cliente;
