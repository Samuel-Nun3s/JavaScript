var xhr = new XMLHttpRequest();
var documento = {
    "userId": 200,
    "id": 12,
    "title": "Noticia exclusiva",
    "body": "Desenvolvedor larga jQuery após ver como é facil viver sem ele"
}

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        console.log(xhr);
    }
}

xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

// status 201 representa criado
xhr.send(documento);
