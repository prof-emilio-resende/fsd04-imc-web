class ImcTableController extends Controller {
    constructor() {
        super();
        this.svc = new ImcCalculatorService();
    }

    loadTable(rawObj) {
        const entries = [];
        Object.keys(rawObj)
            .sort()
            .forEach(k => {
                entries.push({'index': k, 'text': rawObj[k]})
            });
            
        this.notifyStateChange({
            entries: entries
        });
    }

    getTableData() {
        this
            .svc
            .getTable(this.loadTable.bind(this));
    }
}