// Função normal com 2 parametros
function subtração(a, b) { 
    return a - b;
}

// Arrow Function com 2 parametros
const subtração2 = (a, b) => a - b;

// Função normal com 1 parametro
function somar(a) { 
    return a + 2;
}

// Arrow Function com 1 parametro
const somar2 = a => a + 2;

// Função normal sem nenhum parametro
function diaDoMes() {
    return new Date().getDate();
}
console.log(diaDoMes());

// Arrow Function sem nenhum parametro
const diaDoMes2 = () => new Date().getDate();
console.log(diaDoMes2());

// Função normal com muitas funcionalidades
function superFunçao(a, b) {
    var subtracao = a - b;
    subtracao -= 2;
    var diaDoMes = new Date().getDate();
    return diaDoMes;
}

// Arrow Function com muitas funcionalidades
const superFunçao = (a, b) => {
    var subtracao = a - b;
    subtracao -= 2;
    var diaDoMes = new Date().getDate();
    return diaDoMes;
}