// Destructuration
// Destructure Asignment
const person = {
    name: 'Tony',
    age: 45,
    code: 'Ironman'
};

// const { age, code, name, } = person;

// console.log( name );
// console.log( age );
// console.log( code );

const useContext = ({ code, name, age, rango = 'Capitán' }) => {
    // console.log( name, age, rango );
    return {
        namecode: code,
        age: age,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { namecode, age, latlng: { lat, lng } } = useContext(person);

console.log(namecode, age);
console.log(lat, lng);
