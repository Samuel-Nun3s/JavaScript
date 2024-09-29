var num = document.querySelector('#num');
var lista = document.querySelector('#lista');
var resultado = document.querySelector('#resultado');
var valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value));
        var item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        resultado.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }

    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.');
    } else {
        var tot = valores.length;
        var maior = valores[0];
        var menor = valores[0];
        var soma = 0;
        var media = 0;

        for (var pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }

        media = soma / tot;

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`;
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`;
        resultado.innerHTML += `<p>A media de todos os valores são ${media}</p>`;
    }
}