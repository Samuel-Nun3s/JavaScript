document.addEventListener('DOMContentLoaded', function() {
    // Pega o horario atual da maquina
    var tempo = new Date();
    var hora = tempo.getHours();
    
    // Atualiza o texto do parágrafo conforme a hora atual
    var horario = document.getElementById('horario');
    horario.innerHTML = `Agora são ${hora} horas`;

    // Define o caminho da imagem com base na hora
    var imagem = document.getElementById('imagem');
    var caminho;
    var cor;

    if (hora >= 7 && hora <= 12 ) {
        caminho = 'images/dia.jpeg';
        cor = '#FDD681'
    } else if (hora >= 13 && hora <= 18) {
        caminho = 'images/tarde.jpeg';
        cor = '#D3C3AB'
    } else {
        caminho = 'images/noite.jpeg';
        cor = '#21333D'
    }

    // Define as configurações do body
    document.body.style.backgroundColor = cor

    // Define a imagem de fundo e suas propriedades
    imagem.style.backgroundImage = 'url(' + caminho + ')';
    imagem.style.backgroundSize = 'cover';
    imagem.style.backgroundRepeat = 'no-repeat';
})
