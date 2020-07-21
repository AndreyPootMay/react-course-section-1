const firstName   = 'Fernando';
const lastName = 'Herrera';


// const firstName = firstName + ' ' + lastName;
const fullName = `${ firstName } ${ lastName }`;

console.log( fullName );


function getSaludo(firstName) {
    return 'Hola ' + firstName;
}

console.log( `Este es un texto: ${ getSaludo( firstName ) }  ` );
