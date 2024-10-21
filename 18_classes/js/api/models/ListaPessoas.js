export class ListaPessoas {

    constructor(lista=[]) {
        this._pessoas = lista;
    }

    adiciona(pessoa) {
        this._pessoas.push(pessoa);
    }

    // programação defensiva retornar uma copia do array
    // usando o cancat, passando o nosso array como parametro
    get pessoas() {
        return [].concat(this._pessoas);
    }
}
