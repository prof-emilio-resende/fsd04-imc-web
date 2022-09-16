import ViewComponent from '../framework/ViewComponent.js';

export default class ImcTableView extends ViewComponent {
    constructor() {
        super();
    }

    render() {
        if (this.state == null || this.state.entries == null || this.state.entries.lenght < 1)
            return '<table></table>';

        return `<table>
            ${ this.state.entries.map(entry => {
                return `
                    <tr>
                        <td>${entry['index']}</td>
                        <td>${entry['text']}</td>
                    </tr>
                `
            }).join('') }
        </table>`;
    }
}