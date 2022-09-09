class ImcFormView {
    constructor() {
        this.element = document.querySelector('ImcFormView');
        if (this.element === undefined || this.element === null) {
            throw Error('Nao localizei ImcFormView tag...');
        }
        this.state = {
            person: new ImcPerson(0, 0, 0, '')
        };

        this.paint();
    }

    render() {
        if (this.state.person == null) return null;

        return `
        <div class="form">
            <div class="row">
                <label>Altura</label>
                <input id="altura" value="${this.state.person.height}" placeholder="digite sua altura..." />
            </div>
            <div class="row">
                <label>Peso</label>
                <input id="peso" value="${this.state.person.weight}" placeholder="digite seu peso..." />
            </div>
            <div class="row">
                <button 
                    type="button"
                    id="main-action"
                >
                    Calcular...
                </button>
            </div>
        </div>
        `;
    }

    setState(newState) {
        this.state = newState;
        this.paint();
    }

    paint() {
        this.element.innerHTML = this.render();
    }
}