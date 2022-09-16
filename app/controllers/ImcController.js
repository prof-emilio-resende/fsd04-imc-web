import Controller from '../framework/Controller.js';
import ImcCalculatorService from '../domain/services.js';
import { Person } from '../domain/models.js';

export default class ImcController extends Controller {
    constructor() {
        super();
        this.heightElem = document.querySelector('#altura');
        this.weightElem = document.querySelector('#peso');
        this.svc = new ImcCalculatorService();
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