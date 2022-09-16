import ViewComponent from '../framework/ViewComponent.js';

export default class ImcView extends ViewComponent {
    constructor() {
        super();
    }

    translateImcToText(imcPerson) {
        return imcPerson.imc + " - [" + imcPerson.imcDescription + "]";
    }

    render() {
        if (this.state == null || this.state.person == null)
            return '<div class="result"></div>';

        return `
        <div class="result">
            <span>Seu IMC &eacute;: 
                <label id="imc">${this.translateImcToText(this.state.person)}</label>
            </span>
        </div>`;
    }
}