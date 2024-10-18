const characters = [
    {name: 'Frodo', race: 'Hobbit'},
    {name: 'Sam', race: 'Hobbit'},
    {name: 'Aragorn', race: 'Man'},
    {name: 'Legolas', race: 'Elf'},
    {name: 'Gimli', race: 'Dwarf'},
    {name: 'Boromir', race: 'Man'},
    {name: 'Merry', race: 'Hobbit'},
    {name: 'Pippin', race: 'Hobbit'},
    {name: 'Gandalf', race: 'Ainur'},
]

// Sem usar High Order Functions
// const hobbits = [];

// for (let i = 0; i < characters.length; i++) {
//     if (characters[i].race === 'Hobbit') {
//         hobbits.push(characters[i]);
//     }
// }

// Usando High Order Functions
const isHobbit = character => character.race === 'Hobbit';

const hobbits = characters.filter(isHobbit);

console.log(hobbits);