import { View } from "./View.js";

export class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return model.texto ? `<p class= 'alert alert-success'>${model.texto}</p>` :
        '<p></p>';
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
        // apos 3 segundos definir conteudo vazio para limpar a mensagem
        setTimeout(() => this._elemento.innerHTML = '', 3000);
    }
}
