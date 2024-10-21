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
const btnEditar = document.querySelector("#btnEditar");

formApagarEditar.addEventListener("submit", (event) => {
    event.preventDefault();
})

btnApagar.addEventListener("click", () => {
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

btnEditar.addEventListener('click', () => {
    
    // rolar pagina para cima
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

    document.querySelector("#nome").focus();

    let id = document.querySelector("#id").value;

    document.querySelector("#idPessoa").value = id;
    document.querySelector("#id").value = null;

    let pessoa = pessoaController.buscaPorId(id);

    if (pessoa) {
        let { _nome, _idade, _peso, _altura } = pessoa;
        // preencher o formulario com os dados
        pessoaController.preencheFormulario(_nome, _idade, _peso, _altura);
    }
})

// formulario formApagar
// Controles da janela modal
function openModal(mensagem) {
    document.querySelector("#modal").classList.add("active");
    document.querySelector("#mensagemModal").innerHTML = 
    `
        <h2>${mensagem}</h2>
    `
}

function closeModal() {
    document.querySelector("#modal").classList.remove("active");
}

// Evento para fechar a janela modal
document.querySelector("#modalClose").addEventListener("click", closeModal);

// botao nao
document.querySelector("#nao").addEventListener("click", closeModal);
