// 1) Criar e Acessar um Objeto
let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020
};

// Acessar e imprimir a propriedade 'modelo'
console.log('Modelo do carro:', carro.modelo); 

// 2) Adicionar e Modificar Propriedades de um Objeto
carro.cor = 'preto';
carro.ano = 2021; 

// Imprime o objeto modificado
console.log('Objeto carro modificado:', carro);

// 3) Criar um Método em um Objeto
let calculadora = {
    soma: function(num1, num2) {
        return num1 + num2;
    }
};

// Exemplo de uso do método 'soma'
let resultado = calculadora.soma(5, 7);
console.log('Resultado da soma:', resultado); // Saída: 12

// 4) Iterar Sobre as Propriedades de um Objeto
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// 5) Entendendo Referências de Objetos
let livro = {
    titulo: '1984',
    autor: 'George Orwell'
};

// Cria outra variável que referencia o objeto livro
let outroLivro = livro;

// Modifica a propriedade 'titulo'
outroLivro.titulo = 'A Revolução dos Bichos';

// Verifica se o objeto original foi alterado
console.log('Objeto livro após modificação:', livro);

// 6) Usando Métodos Avançados de Objeto
let pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

// Listar todas as chaves do objeto
console.log('Chaves do objeto pessoa:', Object.keys(pessoa));

// Listar todos os valores do objeto
console.log('Valores do objeto pessoa:', Object.values(pessoa));
