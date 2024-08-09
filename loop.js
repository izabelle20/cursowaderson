let contador = 0;
while (contador < 10) {
    console.log("Valor do Contador " + contador);
    contador++;
}

//ATIVIDADE 1: 
let numero = 1; 

while (numero <= 20) { 
    if (numero % 2 === 0) { 
        console.log(numero); 
    }
    numero++; 
}

//ATIVIDADE 2: 
for (let i = 2; i <= 100; i++) { 
    let ehPrimo = true; 
    
    for (let j = 2; j < i; j++) { 
        if (i % j === 0) {
            ehPrimo = false; 
            break; 
        }
    }
    
    if (ehPrimo) { 
        console.log(i); 
    }
}

//ATIVIDADE 3: 
for (let i = 1; i <= 10; i++) { 
    console.log("5 x " + i + " = " + (5 * i)); 
}

//ATIVIDADE 4:
let cont = 0; 
let numeroAtual = 1; 

while (cont  < 10) { 
    if (numeroAtual % 3 === 0) {
        console.log(numeroAtual); 
        cont++; 
    }
    numeroAtual++; 
}
