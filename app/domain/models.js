export class Person {
    constructor(theHeight, theWeight) {
        this._height = theHeight;
        this._weight = theWeight;
    }

    get height() {
        return this._height;
    }

    set height(theHeight) {
        this._height = theHeight;
    }
    
    get weight() {
        return this._weight;
    }

    set weight(theWeight) {
        this._weight = theWeight;
    }

    asJson() {
        return {
            'height': this._height,
            'weight': this._weight
        }
    }
}

export class ImcPerson extends Person {
    constructor(height, weight, imc, imcDescription) {
        super(height, weight);
        this.imc = imc;
        this.imcDescription = imcDescription;
    }
}