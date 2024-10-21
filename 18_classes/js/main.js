import { PessoaController } from './api/controllers/PessoaController.js'

let pessoaController = new PessoaController()

// Controlar envio do formulario e exibição na tabela
let formulario = document.querySelector('form');

// escutador de evento no formulario
formulario.addEventListener('submit', (event) => {
    
    // adicionar pessoa
    pessoaController.adiciona(event);

    // limpar formulario
    pessoaController._limpaFormulario();
})

// formulario formApagar
const formApagarEditar = document.querySelector("#formApagarEditar");
const btnApagar = document.querySelector("#btnApagar"); 
const btnEditar = document.querySelector("btnEditar");

formApagarEditar.addEventListener("submit", (event) => {
    event.preventDefault();
})

btnApagar.addEventListener("click", (event) => {
    let id = document.querySelector("#id").ariaValueMax;
    console.log("Apagar registro: " + id);

    document.querySelector("#id").value = null;

    // Interações com a janela modal
    //abrir janela modal
    openModal(`Deseja apagar o registro ${id} ?`);

    // se clicar no botao sim
    document.querySelector('#sim').addEventListener("click", () => {
        pessoaController.apaga(id);
        closeModal();
    })
    // Interações com a janela Modal
})
