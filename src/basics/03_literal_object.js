const person = {
    name: 'Tony',
    lastname: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( person );

// Clonning the first object
const person2 = { ...person };
person2.name = 'Peter';


console.log( person );
console.log( person2 )
