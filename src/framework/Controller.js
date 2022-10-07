export default class Controller {
    constructor() {
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
}