//ATIVIDADE 1
function Area_do_triangulo(largura, altura) {
    return largura * altura;
}

console.log(Area_do_triangulo(5, 10)); 

//ATIVIDADE 2
function Numero_Par(numero) {
    return numero % 2 === 0;
}

console.log(Numero_Par(4)); 
console.log(Numero_Par(7)); 

//ATIVIDADE 3
function Polegadas_Centimentro(polegadas) {
    return polegadas * 2.54;
}

console.log(Polegadas_Centimentro(10)); 

//ATIVIDADE 4
function IMC(peso, altura) {
    return peso / (altura * altura);
}

console.log(IMC(70, 1.75));

//ATIVIDADE 5 
function converterParaMinusculas(texto) {
    return texto.toLowerCase();
}

console.log(converterParaMinusculas("HELLO WORLD"));

//  Função Personalizada de Saudação
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// Exemplo de uso da função de saudação personalizada
let nome = 'Ana'; // Altere este valor para testar diferentes nomes
console.log(saudacao(nome)); // Saída: Olá, Ana!

//  Calculadora Simples com Expressão de Função
const calculadoraSimples = function(numero1, numero2, operacao) {
    switch (operacao) {
        case 'soma':
            return numero1 + numero2;
        case 'subtração':
            return numero1 - numero2;
        default:
            return 'Operação inválida';
    }
};

// Exemplo de uso da calculadora simples
let num1 = 10;
let num2 = 5;
let operacao = 'soma'; // Altere para 'subtração' para testar a subtração
console.log(calculadoraSimples(num1, num2, operacao)); // Saída: 15

// Implementando uma Arrow Function
const multiplicaPorDez = numero => numero * 10;

// Exemplo de uso da arrow function
let numero = 7; // Altere este valor para testar diferentes números
console.log(multiplicaPorDez(numero)); // Saída: 70

//  Função Aninhada para Cálculo de Potência
function potencia(x) {
    return function(y) {
        return Math.pow(x, y);
    };
}

// Exemplo de uso da função aninhada
let base = 2;
let expoente = 3;
const calcularPotencia = potencia(base);
console.log(calcularPotencia(expoente)); // Saída: 8

//  Parâmetros Padrão em Função de Pedido
function fazerPedido(item = 'Café', quantidade = 1) {
    return `Pedido: ${quantidade} ${item}${quantidade > 1 ? 's' : ''}`;
}

// Exemplo de uso da função de pedido
let item = 'Chá'; // Altere este valor para testar diferentes itens
let quantidade = 2; // Altere este valor para testar diferentes quantidades
console.log(fazerPedido(item, quantidade)); // Saída: Pedido: 2 Chás

// Função para Converter Temperatura
function converterTemperatura(valor, unidade) {
    if (unidade === 'C') {
        return valor * 9 / 5 + 32; // Celsius para Fahrenheit
    } else if (unidade === 'F') {
        return (valor - 32) * 5 / 9; // Fahrenheit para Celsius
    } else {
        return 'Unidade inválida';
    }
}

// Exemplo de uso da função de conversão de temperatura
let temperatura = 100; // Altere este valor para testar diferentes temperaturas
let unidade = 'C'; // Altere para 'F' para converter de Fahrenheit para Celsius
console.log(converterTemperatura(temperatura, unidade)); // Saída: 212
