function tabuada() {
    var numero = document.getElementById('numero').value;
    var resultado = document.getElementById('res');

    if (numero.length == 0) {
        window.alert('Impossivel Multiplicar! Digite um numero.');
    } else {
        resultado.innerHTML = '';
        for(c = 1; c <= 10; c++) {
            var option = document.createElement('option');
            option.text = `${numero} x ${c} = ${numero * c}`;
            option.value = `tab${c}`;
            resultado.appendChild(option);
        }
    }
}