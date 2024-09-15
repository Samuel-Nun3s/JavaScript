function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formano = document.getElementById('nasc');
    var res = document.getElementById('res');

    if (formano.value.length == 0 || formano.value > ano) {
        window.alert('[ERRO] Verifique os dados novamente!');
    } else {
        var fsex = document.getElementsByName('sexo');
        var idade = ano - Number(formano.value);
        var genero;
        var caminho;
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade <10) {
                caminho = 'images/bebe_m.png';
            } else if (idade < 21) {
                caminho = 'images/jovem_m.png';
            } else if (idade < 50) {
                caminho = 'images/adulto_m.png';
            } else {
                caminho = 'images/idoso_m.png';
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade <10) {
                caminho = 'images/bebe_f.png';
            } else if (idade < 21) {
                caminho = 'images/jovem_f.png';
            } else if (idade < 50) {
                caminho = 'images/adulto_f.png';
            } else {
                caminho = 'images/idoso_f.png';
            }
        }
        img.setAttribute('src', caminho);
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}