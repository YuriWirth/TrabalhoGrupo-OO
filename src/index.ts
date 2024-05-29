/*
Requisitos:
1 - Classe Produto (Produto)

Atributos:
nome (string)
preco (number)
quantidade (number) - Quantidade disponível em estoque.

Métodos:
vender(quantidade: number): Vende uma determinada quantidade do produto, se disponível no estoque. Retorna true se a venda for bem-sucedida, false caso contrário.
repor(quantidade: number): Adiciona uma quantidade ao estoque do produto.

2 - Classe Cliente (Cliente)

Atributos:
nome (string)
idCliente (string)
produtosComprados (array de Produto) - Lista de produtos adquiridos pelo cliente.

Métodos:
comprar(produto: Produto, quantidade: number): Permite ao cliente comprar uma certa quantidade de um produto.

3 - Classe Loja (Loja)

Atributos:
produtos (array de Produto) - Lista de produtos disponíveis na loja.
clientes (array de Cliente) - Lista de clientes da loja.

Métodos:
adicionarProduto(produto: Produto): Adiciona um produto ao inventário da loja.
registrarCliente(cliente: Cliente): Registra um novo cliente na loja.
fazerVenda(idCliente: string, nomeProduto: string, quantidade: number): Realiza uma venda para um cliente específico. */

import Cliente from "./model/Cliente";
import Loja from "./model/Loja";
import Produto from "./model/Produto";

const produto1 = new Produto("Skin", 1600, 3);
const cliente1 = new Cliente("Jamal");
const loja1 = new Loja();

loja1.adicionarProduto(produto1);
loja1.adicionarCliente(cliente1);
loja1.fazerVenda(cliente1.id, produto1, 2);
