// Functions in JS
// const greeting = function( name ) {
//     return `Hola, ${ nombre }`;
// }

const greeting2 = (name) => {
    return `Hola, ${name}`;
}

const greeting3 = (name) => `Hola, ${name}`;
const greeting4 = () => `Hola Mundo`;

// console.log( saludar('Goku') )

console.log(greeting2('Veggeta'));
console.log(greeting3('Goku'));
console.log(greeting4());


const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});


const user = getUser();
console.log(user);

// Homework
const getActiveUser = (name) => ({
    uid: 'ABC567',
    username: name
});

const activeUser = getActiveUser('Andrey');
console.log(activeUser);

