// Escopo:
// Escopo Global:
let nome = "Samuel"; // variavel no escopo global

// Por possuir escopo global pode ser usada em qualquer lugar do codigo
function exibirNome() {
    console.log(nome); 
}

exibirNome();
console.log(nome);
const idade = 19;

// Escopo Local => {}:
// Por possuir escopo local só pode ser usada dentro de seu escopo
function exibirIdade() {
    const idade = 18;
    console.log("sua idade é: " + idade);
}

exibirIdade();
// console.log(idade); Essa linha mostrará um erro

// Escopo de bloco:
if (true) {
    const idade = 15;
    console.log("Idade if: " + idade);
}

console.log("Idade global: " + idade);

for (let i = 0; i < 3; i++) {
    const idade = 45;

    console.log("idade loop: " + idade);
}

// Hoisting: Consegue chamar variaveis e funções antes mesmo delas serem criadas
x;
console.log(x);

var x = 5;
console.log(x);
 
// let e const -> Anulam o hoisting de variaveis

digaOi();

function digaOi() {
    console.log("Oi!");
}

// JS moderno, ele anula de certa forma o hoisting