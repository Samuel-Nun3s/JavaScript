// Declarando a funcão para fazer a contagem
function contar() {
    // Coletando os valores
    var comeco = document.getElementById('inicio');
    var inicio = Number(comeco.value);
    var final = document.getElementById('fim');
    var fim = Number(final.value);
    var passo = document.getElementById('passo');
    var pass = Number(passo.value); 
    var resposta = document.getElementById('resposta');

    // Verificando se os valores estao vazios
    if (comeco.value.length == 0 || final.value.length == 0) {
        resposta.innerHTML = 'Impossivel contar';
    } else {

        // Verificando se o passo é diferente de 0
        if (pass == 0) {
            window.alert('Passo invalido! Considerando PASSO 1');
            pass = 1;
        }

        // Fazendo a contagem
        resposta.innerHTML = 'Contando: <br>';

        if (inicio < fim) {
            for (inicio; inicio <= fim; inicio += pass) {
                resposta.innerHTML += `${inicio}👉 `;
            }
        } else if (inicio > fim) {
            for (inicio; inicio >= fim; inicio -= pass) {
                resposta.innerHTML += `${inicio}👉 `;
            }
        } else {
            resposta.innerHTML = "[ERRO] Os dois valores são iguais!";
        }

        resposta.textContent += '🏁';
    }
}  