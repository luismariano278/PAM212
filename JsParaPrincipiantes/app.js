//condicionales
let passworddB = 'yoyoyo'
let input = 'yoyoyo'
let result = input == passworddB;

if (result == true){
    console.log('Login correcto');
} else{
    console.log('Contraseña incorrecta');
}

let score = 70;

if (score >30) {
    console.log('eres malisimo, practica más!')
}

if (score > 15) {
    console.log('ahi vas bro, echale')

}
else {
    console.log('necesitas ver el tutorial')
}

let typeCard = 'Debit Card';
switch(typeCard){
case 'Debit card':
    console.log('Esto es una tarjeta de debito')
        break;

case 'Credit Card':
    console.log ('Esto es una tarjeta de Credito');
    break;

default: 
console.log ('no card');
}