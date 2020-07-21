// Arrays in JS
// const array_numbers = new Array( 100 );
const array_numbers = [1,2,3,4];
// array_numbers.push(1)
// array_numbers.push(2)
// array_numbers.push(3)
// array_numbers.push(4)

let array_numbers2 = [ ...array_numbers, 5 ];

const array_numbers3 = array_numbers2.map( function(number) {
    return number * 2;
});


console.log( array_numbers );
console.log( array_numbers2 );
console.log( array_numbers3 );
