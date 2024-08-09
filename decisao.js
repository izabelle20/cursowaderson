let nota = 7;
if (nota >= 7) {
	console.log("Aprovado!"); 
}

let idade = 18;
if (idade < 18) {
	console.log("Menor de idade");
} else {
	console.log("Adulto");
}

let temperatura = 30;
if (temperatura > 30) {
    console.log("Dia quente");
} else if (temperatura < 20) {
    console.log("Dia frio");
} else {
    console.log("Temperatura agradável");
}

//ATIVIDADE 1
let idade_pessoal = 25; 

if (idade_pessoal  >= 0 && idade_pessoal  <= 12) {
    console.log("Você é uma criança");
} else if (idade_pessoal  >= 13 && idade_pessoal  <= 18) {
    console.log("Você é um adolescente");
} else if (idade_pessoal  >= 19 && idade_pessoal <= 60) {
    console.log("Você é um adulto");
} else {
    console.log("Você é um idoso");
}

//ATIVIDADE 2
let numero = 7; 

if (numero % 2 === 0) {
    console.log("Número Par");
} else {
    console.log("Número Ímpar");
}

//ATIVIDADE 3
let valorCompra = 150; // Exemplo de valor da compra
let valorFinal;

if (valorCompra > 100) {
    valorFinal = valorCompra * 0.9; // Aplica 10% de desconto
    console.log("Você recebeu um desconto de 10%!");
} else {
    valorFinal = valorCompra;
}

console.log("Valor final da compra: R$ " + valorFinal.toFixed(2));

//ATIVIDADE 4
let num1 = 10; 
let num2 = 25; 
let num3 = 7;  

let maior;

if (num1 >= num2 && num1 >= num3) {
    maior = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maior = num2;
} else {
    maior = num3;
}

console.log("O maior número é: " + maior);

//ATIVIDADE 5
let temp = 20; // Exemplo de temperatura em graus Celsius

if ( temp  > 25) {
    console.log("Sugestão de atividade: Ir à praia");
} else if ( temp  >= 15 &&  temp  <= 25) {
    console.log("Sugestão de atividade: Fazer uma caminhada");
} else {
    console.log("Sugestão de atividade: Ir ao cinema");
}