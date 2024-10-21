import {Pessoa} from "../models/Pessoa.js";
import { ListaPessoas } from "../models/ListaPessoas.js";
import { PessoasView } from "../views/PessoasViews.js";

import { Mensagem } from "../models/Mensagem.js";
import { MensagemView } from "../views/MensagemView.js";

import { PessoasRepository } from "../repositories/PessoaRepository.js";

export class PessoaController {

    // atributos, propriedades
    _inputNome
    _InputIdade
    _inputPeso
    _inputAltura

    // metodos

    // constructor
    constructor () {
        this._inputNome = document.querySelector("#nome");
        this._inputIdade = document.querySelector("#idade");
        this._inputPeso = document.querySelector("#peso");
        this._inputAltura = document.querySelector("#altura");

        // Repositorio
        this._pessoasRepository = new PessoasRepository();
        console.log(this._pessoasRepository);
        let lista = this._pessoasRepository.ler();
        console.log(lista);
        
        // criar lista de pessoas e view de pessoas
        this._listaPessoas = new ListaPessoas(lista);
        this._pessoasView = new PessoasView(document.querySelector('#dados'));
        this._pessoasView.update(this._listaPessoas);

        // mensagem
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(document.querySelector('#mensagem'));
        this._mensagemView.update(this._mensagem);
    }


    // adicionar pessoa
    adiciona(event) {

        event.preventDefault();
        const id = document.querySelector("#idPessoa").value;

        // se nao tiver id adiciona senao atualiza
        if (!id) {
            // adicionar nova pessoa na lista
            const pessoaAdd = this._criaPessoa();
            this._listaPessoas.adiciona(pessoaAdd);
            //console.log(this._listaPessoas.pessoas);

            // adicionar no repositorio
            this._pessoasRepository.criar(pessoaAdd);
            this._pessoasView.update(this._mensagem);

            // definir e atualizar mensagem
            this._mensagem.texto = 'Pessoa cadastrada com sucesso!';
            this._mensagemView.update(this._mensagem);

            // atualização da tela
            this._pessoasView.update(this._listaPessoas);
        } else {
            this.atualiza(id); // atualiza do controller
        }
    }

    // criar pessoa
    _criaPessoa() {
        return new Pessoa(
            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value
        )
    }

    // limpar formulario
    _limpaFormulario() {
        this._inputNome.value = ""
        this._inputIdade.value = ""
        this._inputPeso.value = ""
        this._inputAltura.value = ""

        this._inputNome.focus()
    }

    apaga(id) {
        // se tem id pode apagar o registro
        if (id) {
            this._listaPessoas.remove(id); // remove da view
            this._pessoasView.update(this._listaPessoas); // atualizar a view

            this._pessoasRepository.apagar(id); // remove do repository
            console.log("PessoaController Apagou");
        }
    }

    atualiza(id) {
        // criar nova pessoa atualizada
        let pessoaAtualizada = this._criaPessoa();
        console.log(pessoaAtualizada);

        // atualizar repositorio
        this._pessoasRepository.atualizar(id, pessoaAtualizada);
        console.log("Atualizou repositorio");

        // atualizar lista
        this._listaPessoas.atualiza(id, pessoaAtualizada);
        console.log("Atualizou a lista");

        // atualizar a view
        this._pessoasView.update(this._listaPessoas);
        document.querySelector("#idPessoa").value = null;
    }

    buscaPorId(id) {
        let pessoaEncontrada = this._pessoasRepository.lerPorId(id);
        return pessoaEncontrada;
    }

}
