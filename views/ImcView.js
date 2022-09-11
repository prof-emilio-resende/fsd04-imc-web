class ImcView {
    constructor() {
        this.element = document.querySelector('ImcView');
        if (this.element === undefined || this.element === null) {
            throw Error('Nao localizei ImcView tag...');
        }
        this.state = {
            person: null
        };

        this.paint();
    }

    translateImcToText(imcPerson) {
        return imcPerson.imc + " - [" + imcPerson.imcDescription + "]";
    }

    render() {
        console.log(this.state.person);
        if (this.state.person == null)
            return '<div class="result"></div>';

        return `
        <div class="result">
            <span>Seu IMC &eacute;: 
                <label id="imc">${this.translateImcToText(this.state.person)}</label>
            </span>
        </div>`;
    }

    setState(newState) {
        this.state = newState;
        this.paint();
    }

    paint() {
        this.element.innerHTML = this.render();
    }
}