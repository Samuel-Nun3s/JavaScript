export class ListaPessoas {

    constructor(lista=[]) {
        this._pessoas = lista;
    }

    adiciona(pessoa) {
        this._pessoas.push(pessoa);
    }

    remove(id) {
        this._pessoas.splice(id, 1);
    }

    atualiza(id, pessoaAtualizada) {
        this._pessoas[id] = pessoaAtualizada;
    }

    // programação defensiva retornar uma copia do array
    // usando o cancat, passando o nosso array como parametro
    get pessoas() {
        return [].concat(this._pessoas);
    }
}
