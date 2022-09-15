class ImcController {
    constructor() {
        this.heightElem = document.querySelector('#altura');
        this.weightElem = document.querySelector('#peso');
        this.svc = new ImcCalculatorService();
        this.stateListeners = [];
    }

    registerStateListener(obj) {
        this.stateListeners.push(obj);
    }

    notifyStateChange(state) {
        this.stateListeners.forEach(o => {
            console.log(o);
            o.setState(state)
        });
    }

    doCalculateImc() {
        console.log('docalc...');
        var height = this.heightElem.value;
        var weight = this.weightElem.value;
        var person = new Person(height, weight);
        
        this.svc.calculateImc(person.asJson(), (imcObj) => {
            this.notifyStateChange({
                person: imcObj
            });
        });
    }

    
}

