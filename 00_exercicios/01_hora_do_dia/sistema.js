document.addEventListener('DOMContentLoaded', function() {
    // Pega o horario atual da maquina
    var tempo = new Date();
    var hora = tempo.getHours();
    
    // Atualiza o texto do parágrafo conforme a hora atual
    var horario = document.getElementById('horario');
    horario.textContent = `Agora são ${hora} horas`;

    // Define o caminho da imagem com base na hora
    var imagem = document.getElementById('imagem');
    var caminho;

    // Seleciona a imagem conforme o horario coletado
    if (hora >= 7 && hora <= 12 ) {
        caminho = 'images/dia.jpeg';
    } else if (hora >= 13 && hora <= 18) {
        caminho = 'images/tarde.jpeg';
    } else {
        caminho = 'images/noite.jpeg';
    }

    // Define a imagem de fundo e suas propriedades
        imagem.style.backgroundImage = 'url(' + caminho + ')';
        imagem.style.backgroundSize = 'cover'
        imagem.style.backgroundRepeat = 'no-repeat'
})
