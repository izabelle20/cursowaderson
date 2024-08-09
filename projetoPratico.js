// 1) Criar uma Classe Animal
class Animal {
    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
    }

    falar() {
        console.log(`${this.nome} faz: ${this.som}`);
    }
}

// Exemplo de uso da classe Animal
let cachorro = new Animal('Cachorro', 'au au');
cachorro.falar(); // Saída: Cachorro faz: au au

// 2) Classe Veículo com Método de Velocidade
class Veiculo {
    constructor(marca, modelo, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    descrever() {
        console.log(`Veículo: ${this.marca} ${this.modelo}, Velocidade Máxima: ${this.velocidadeMaxima} km/h`);
    }
}

// Exemplo de uso da classe Veiculo
let carro = new Veiculo('Ford', 'Mustang', 250);
carro.descrever(); 

// 3) Classe Estudante com Notas
class Estudante {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    calcularMedia() {
        let soma = this.notas.reduce((a, b) => a + b, 0);
        return soma / this.notas.length;
    }
}

// Exemplo de uso da classe Estudante
let aluno = new Estudante('Lucas', [7, 8, 9]);
console.log(`Média do aluno ${aluno.nome}: ${aluno.calcularMedia()}`); 

// 4) Método Estático para Conversão de Temperatura
class Utilitario {
    static conversor(celsius) {
        return celsius * 9 / 5 + 32;
    }
}

// Exemplo de uso do método estático
let Fahrenheit = Utilitario.conversor(25);
console.log(`25°C em Fahrenheit é: ${Fahrenheit}°F`); 

// 5) Jogo Simples com Classe
class Jogo {
    static gerarNumeroAleatorio() {
        return Math.floor(Math.random() * 5) + 1;
    }

    static adivinhar(numeroUsuario) {
        let numeroAleatorio = Jogo.gerarNumeroAleatorio();
        return numeroUsuario === numeroAleatorio ? 'Acertou!' : `Errou! O número era ${numeroAleatorio}`;
    }
}

// Exemplo de uso da classe Jogo
let resultado = Jogo.adivinhar(3); // Altere para testar diferentes números
console.log(resultado);

// 6) Classe ContaBancaria com Método de Saque
class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado. Saldo atual: ${this.saldo}`);
        } else {
            console.log('Saldo insuficiente');
        }
    }
}

// Exemplo de uso da classe ContaBancaria
let conta = new ContaBancaria(1000);
conta.sacar(200); 
conta.sacar(900); 

// 7) Método para Editar Descrição de uma Tarefa
class Tarefa {
    constructor(descricao, dataCriacao) {
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
    }

    editarDescricao(novaDescricao) {
        this.descricao = novaDescricao;
        console.log(`Descrição atualizada para: ${this.descricao}`);
    }
}

// Exemplo de uso da classe Tarefa
let tarefa = new Tarefa('Comprar leite', '2024-08-09');
tarefa.editarDescricao('Comprar pão'); 

// 8) Método para Listar Tarefas Completas e Pendentes Separadamente
class GerenciadorDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }

    listarTarefasCompletas() {
        console.log('Tarefas completas:');
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa.descricao} (Criada em: ${tarefa.dataCriacao})`);
        });
    }

    listarTarefasPendentes() {
        console.log('Tarefas pendentes:');
        
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa.descricao} (Criada em: ${tarefa.dataCriacao})`);
        });
    }
}

// Exemplo de uso da classe GerenciadorDeTarefas
let gerenciador = new GerenciadorDeTarefas();
gerenciador.adicionarTarefa(new Tarefa('Estudar JavaScript', '2024-08-10'));
gerenciador.adicionarTarefa(new Tarefa('Fazer exercícios', '2024-08-11'));
gerenciador.listarTarefasCompletas();
gerenciador.listarTarefasPendentes();

// 9) Adicionar Data de Criação à Tarefa e Implementar Prioridade
class Tarefa {
    constructor(descricao, dataCriacao) {
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
    }
}

class TarefaPrioridade extends Tarefa {
    constructor(descricao, dataCriacao, prioridade) {
        super(descricao, dataCriacao);
        this.prioridade = prioridade;
    }
}

class GerenciadorDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }
}

class Prioridade extends GerenciadorDeTarefas {
    listarPrioridade() {
        let tarefasPrioridade = {
            baixa: [],
            media: [],
            alta: []
        };

        this.tarefas.forEach(tarefa => {
            tarefasPrioridade[tarefa.prioridade].push(tarefa);
        });

        console.log('Tarefas por prioridade:');
        for (let prioridade in tarefasPrioridade) {
            console.log(`Prioridade ${prioridade}:`);
            tarefasPrioridade[prioridade].forEach((tarefa, index) => {
                console.log(`${index + 1}. ${tarefa.descricao} (Criada em: ${tarefa.dataCriacao})`);
            });
        }
    }
}

// Exemplo de uso da classe Prioridade
let gerenciarPrioridade = new Prioridade();
gerenciarPrioridade.adicionarTarefa(new TarefaPrioridade('Estudar Node.js', '2024-08-12', 'alta'));
gerenciarPrioridade.adicionarTarefa(new TarefaPrioridade('Ler livro', '2024-08-13', 'baixa'));
gerenciarPrioridade.listarPrioridade();

