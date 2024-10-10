// 1- Inserir dado
localStorage.setItem("name", "Samuel");

// 2 - Resgatar item
const name = localStorage.getItem("name");
console.log(name);

// 3 - Resgate de item que não existe
const lastname = localStorage.getItem("lastname");
console.log(lastname);

if (!lastname) {
    console.log("Sem sobrenome!");
}

// 4 - Remover item
localStorage.removeItem("name");

// 5 - Limpar todos os itens
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

localStorage.clear();