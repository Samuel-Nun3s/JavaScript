//Função convencional
// function greet(name) {
//     return `Hello ${name}`;
// }

// Arrow Function
const greet = (name) => `Hello, ${name}`;

// High Order Function
function speakToMary(dialog) {
    const text = dialog('Mary');
    return `He says "${text}"`;
}

console.log(speakToMary(name => {
    return `Goodbye, ${name}`;
}));