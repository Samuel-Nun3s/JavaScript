// AJAX:
    // ReadyState: representa o estado atual da sua aquisição
        // estados:
        // 0: Requisição não inicializada
        // 1: Estabeleceu requisição com o servidor
        // 2: Pedido recebido
        // 3: Processando Pedido
        // 4: Solicitação concluída e resposta pronta 

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr);
    } else {
        
    }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.send();
