// Card 1
const numeros = prompt('Digite os números separados por vírgula:').split(',').map(Number);
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log('Os elementos digitados são: ',numeros);
console.log('Soma dos elementos:', soma);


// Card 2
const pares = numeros.filter(numero => numero % 2 === 0);
console.log('Números pares:', pares);

// Card 3
const quadrados = numeros.map(numero => numero * numero);
console.log('Quadrados dos números:', quadrados);

// Card 4 a 8 
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    vender(quantidadeVendida) {
        if (quantidadeVendida > this.quantidade) {
            console.log('Estoque insuficiente');
        } else {
            this.quantidade -= quantidadeVendida;
            console.log(`${quantidadeVendida} unidades vendidas. Quantidade restante: ${this.quantidade}`);
        }
    }

    repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta;
        console.log(`${quantidadeReposta} unidades repostas. Quantidade atual: ${this.quantidade}`);
    }

    mostrarEstoque() {
        console.log(`O produto ${this.nome.toUpperCase()} possui ${this.quantidade} unidades disponíveis`);
    }

    atualizarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`O novo preço do produto ${this.nome.toUpperCase()} é R$${this.preco}`);
    }
}

// Exemplo de uso da classe Produto com entrada do usuário
const nomeProduto = prompt('Digite o nome do produto:');
const precoProduto = parseFloat(prompt('Digite o preço do produto:'));
const quantidadeProduto = parseInt(prompt('Digite a quantidade do produto:'));

const produto = new Produto(nomeProduto, precoProduto, quantidadeProduto);
produto.mostrarEstoque();
produto.vender(parseInt(prompt('Digite a quantidade a ser vendida:')));
produto.repor(parseInt(prompt('Digite a quantidade a ser reposta:')));
produto.atualizarPreco(parseFloat(prompt('Digite o novo preço do produto:')));
produto.mostrarEstoque();
