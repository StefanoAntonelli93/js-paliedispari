'use strict'

console.log('okok');



// // - dichiaro una variabile che chieda all'utente di scegliere pari o dispari e la salvo in un prompt (choise)
// // - dichiaro uina variabile che chieda all'utente un numero compreso da 1 a 5 e la salvo in un prompt (userNumber)

// // - in una funzione genero un numero random da 1 a 5 e lo salvo in una variabile
// // - sommo i risultati (sum)

// // - in altra funzione dichiaro se somma è pari o dispari

// // - SE utente ha scelto dispari e somma è dispari ALLORA vince utente
//     ELSE SE utente ha scelto pari e la somma è pari vince utente
//     ELSE vince computer


// INPUT UTENTE
const userChoise = prompt('inserisci "pari" o "dispari"');
const userNumber = parseInt(prompt('inserisci un numero compreso da 1 a 5'));

console.log(userChoise);
console.log('numero utente:', userNumber);

const pcNumber = randomNumber(1, 5);
console.log('numero pc:', pcNumber);

const sum = userNumber + pcNumber; 
console.log('somma:', sum); 



if (pariDispari(sum) === userChoise) {
    console.log('vince utente');
} else {
    console.log('pc vince');
}


// LOGICA PER SVILUPPARE L'IF


// funzione numero randomico
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}


// funzione pari dispari
function pariDispari(num) {
    
    if(num % 2 === 0) return 'pari';
    
    return 'dispari';
}



