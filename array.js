let numeros = [1, 2, 3, 4, 5];

//modificar o ultimo elemento
numeros[4] = 10; 

//adicionar o numero 6 no final da fila
numeros.push(6);

//quantidade de elemento
console.log(numeros.length);

//maior numero em uma array
let maiorNumero = Math.max(...numeros);
console.log(maiorNumero); 

// Declara um array chamado 'animais' e adiciona três nomes de animais usando o método push
let animais = [];
animais.push('cachorro');
animais.push('gato');
animais.push('pássaro');
console.log('Array de animais após adição:', animais);

// Remove o primeiro elemento do array 'animais' usando shift e imprime o array modificado
animais.shift();
console.log('Array de animais após remoção do primeiro elemento:', animais);

// Adiciona dois novos animais no início do array 'animais' usando unshift
animais.unshift('leão');
animais.unshift('tigre');
console.log('Array de animais após inserção no início:', animais);

// Muda o segundo elemento do array 'animais' para 'girafa'
animais[1] = 'girafa';
console.log('Array de animais após alteração do segundo elemento:', animais);

// Declara um array 'frutas' e adiciona algumas frutas a ele
let frutas = ['maçã', 'banana', 'laranja'];
frutas.push('manga');
frutas.push('uva');
console.log('Número total de frutas no array:', frutas.length);

// Percorre o array 'frutas' com um loop for e imprime cada fruta individualmente
console.log('Lista de frutas:');
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
