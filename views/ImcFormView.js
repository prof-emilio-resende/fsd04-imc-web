class ImcFormView extends ViewComponent {
    constructor() {
        super();
        this.setState({
            person: new ImcPerson(0, 0, 0, '')
        });
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
}