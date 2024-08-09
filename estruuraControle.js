// Classificação por Idade
function Idade(idade) {
    if (idade < 13) {
        return 'criança';
    } else if (idade >= 13 && idade <= 17) {
        return 'adolescente';
    } else if (idade >= 18 && idade <= 64) {
        return 'adulto';
    } else {
        return 'idoso';
    }
}

// Exemplo de uso da função de classificação por idade
let idade = 25; // Altere este valor para testar diferentes idades
console.log('Classificação por idade:', Idade(idade));

// Jogo de Adivinhação com Switch
function jogoDeAdivinhacao(escolhaUsuario) {
    const numeroCorreto = Math.floor(Math.random() * 5) + 1; // Número aleatório entre 1 e 5

    switch (escolhaUsuario) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            if (escolhaUsuario === numeroCorreto) {
                console.log('Parabéns! Você acertou o número.');
            } else {
                console.log('Você errou. O número correto era', numeroCorreto);
            }
            break;
        default:
            console.log('Escolha inválida. Escolha um número entre 1 e 5.');
            break;
    }
}

// Exemplo de uso do jogo de adivinhação
let escolhaUsuario = 3; // Altere este valor para testar diferentes escolhas
jogoDeAdivinhacao(escolhaUsuario);

// Avaliação de Notas com Switch
function avaliarNota(nota) {
    switch (true) {
        case (nota < 6):
            return 'Reprovado';
        case (nota >= 6 && nota <= 7):
            return 'Recuperação';
        case (nota > 7):
            return 'Aprovado';
        default:
            return 'Nota inválida';
    }
}

// Exemplo de uso da função de avaliação de notas
let nota = 7.5; // Altere este valor para testar diferentes notas
console.log('Avaliação da nota:', avaliarNota(nota));
