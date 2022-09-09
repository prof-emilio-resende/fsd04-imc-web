class ImcCalculatorService {
    constructor() {
        this._hostname = 'http://localhost:8080';
        this._path = '/imc/calculate';
        this._xhr = new HttpUtil();
    }

    calculateImc(person, callback) {
        this._xhr
            .post(this._hostname, this._path, person)
            .then(function(response) {
                response.json()
                    .then(function(rawObj) {
                        var imcPerson = new ImcPerson(
                            rawObj['height'],
                            rawObj['weight'],
                            rawObj['imc'],
                            rawObj['imcDescription']);
                        callback(imcPerson);
                    });
            });
    }
}