const characters = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = characters;
console.log(p3);


const returnArray = () => {
    return ['ABC', 123];
}

const [letters, numbers] = returnArray();
console.log(letters, numbers);


// Homework
// 1. The first value of the array would be named "name"
// 2. would be named "setName"
const useState = value => {
    return [value, _ => { console.log('Hola Mundo') }];
}

const [name, setName] = useState('Goku');

console.log(name);
setName();

