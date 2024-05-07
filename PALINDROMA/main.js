'use strict'

// VARIABILE PAROLA PROMPT
let word = prompt('inserisci una parola');
console.log(word);


// FUNZIONE
function isPalindrome(word) {
   
    word = word.toLowerCase();
    let reverseWord = word.split('').reverse().join('');
    console.log(reverseWord);

    return word === reverseWord;
     
}

// if (isNaN(isPalindrome(word))) {
//     console.log(word, "è palindroma");
// } else {
//     console.log(word, "non è palindroma");
// }




// if ((!isNaN(word)))  {
//     console.log('non è una parola');
//     alert('non hai inserito una parola');
// }  else {
//     if (isPalindrome(word)){
//         console.log(word,'è palindorma');
//     } else {
//         console.log(word,'non è palindorma');
//     }
// }

// INVOCO FUNZIONE
if  (/\d/.test(word)) {
    console.log('non è una parola');
    alert('non hai inserito una parola');
}  else {
    if (isPalindrome(word)){
        console.log(word,'è palindorma');
    } else {
        console.log(word,'non è palindorma');
    }
}



