export class Pessoa {

    // atributos = variaveis ou caracteristicas
    _nome // tipo String
    _idade // Tipo Inteiro
    _peso // Tipo Float ou Real
    _altura // Tipo Float ou Real
    _imc // Tipo Flota ou Real
    _classificacao // Tipo String
    static totalPessoas = 0 // atributo estático ou da class

    // métodos = funcões ou comportamentos
    // método construtor
    constructor(nome, idade, peso, altura) {
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = (this._peso / (this._altura * this._altura)).toFixed(2) // set imc
        Pessoa.totalPessoas += 1 // contador com incremento
        this._classificacao = this.classificaImc()
    }

    // get imc
    calculaImc() {
        return this.imc;
    }

    // classificar imc
    classificaImc() {
        // pegar o valor do IMC
        let valorImc = this.imc;
        let classificacao = '';

        if (valorImc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (valorImc <= 24.9) {
            classificacao = "Peso normal";
        } else if (valorImc <= 29.9) {
            classificacao = "Sobrepeso";
        } else if (valorImc <= 34.9) {
            classificacao = "Obesidade grau I";
        } else if (valorImc <= 39.9) {
            classificacao = "Obesidade grau II";
        } else if (valorImc >= 40) {
            classificacao = "Obesidade grau III ou Mórbida";
        } else {
            classificacao = "Peso inválido";
        }
        return classificacao;
    }

    // get = pegar
    get nome() {
        return this._nome;
    }

    get idade() {
        return this._idade;
    }

    get peso() {
        return this._peso;
    }

    get altura() {
        return this._altura;
    }

    get imc() {
        return this._imc;
    }

    get totalPessoas() {
        return Pessoa.totalPessoas;
    }

    // set = configurar, editar, alterar
    set nome(novoNome) {
        this._nome = novoNome;
    }

    set idade(novaIdade) {
        this._idade = novaIdade;
    }

    set peso(novoPeso) {
        this._peso = novoPeso;
    }

    set altura(novaAltura) {
        this._altura = novaAltura;
    }
}
