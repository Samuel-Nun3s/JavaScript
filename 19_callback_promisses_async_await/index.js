// callback > promise > async/await

const fs = require('fs');

console.log(1);

// CALLBACK:
// function callback(erro, conteudo) {
//     console.log(erro, String(conteudo));
// }

// fs.readFile('./in1.txt', callback);

// fs.readFile("./in1.txt", (erro, conteudo) => {
//     fs.readFile("./in2.txt", (erro2, conteudo2) => {
//         console.log(erro, String(conteudo));
//         console.log(erro2, String(conteudo2));
//     })
// })

// Promises:
// const readFile = file => new Promise((resolve, rejeita) => {
//     fs.readFile(file, (erro, conteudo) => {
//         if (erro) {
//             rejeita(erro);
//         } else {
//             resolve(conteudo);
//         }
//     })
// })

// const promessa = readFile('./in1.txt');
// console.log(promessa);

// readFile('./in1.txt')
//     .then( conteudo => {
//         console.log(String(conteudo));
//         return readFile('./in2.txt');
//     })
//     .then( conteudo => {
//         console.log(String(conteudo));
//     })
//     .finally( () => {
//         console.log(promessa);
//     })

// async/await: açucar sintático

const init = async() => {
    const contents = await readFile('./in1.txt');
    console.log(contents);
}
console.log('init', init());

console.log(2);

console.log(3);