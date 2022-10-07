import HttpUtil from '../infrastructure/HttpUtil.js';
import { ImcPerson } from './models.js';
export default class ImcCalculatorService {
  constructor() {
    this._hostname = 'http://localhost:8080';
    this._path = '/imc/calculate';
    this._getTablePath = '/imc/table';
    this._xhr = new HttpUtil();
  }

  getTable(callback) {
    this._xhr.get(this._hostname, this._getTablePath).then(function (response) {
      response.json().then(callback);
    }).catch(xhrErrorHandler);
  }

  calculateImc(person, callback) {
    this._xhr.post(this._hostname, this._path, person).then(function (response) {
      response.json().then(function (rawObj) {
        var imcPerson = new ImcPerson(rawObj['height'], rawObj['weight'], rawObj['imc'], rawObj['imcDescription']);
        callback(imcPerson);
      });
    }).catch(xhrErrorHandler);
  }

}

function xhrErrorHandler(err) {
  console.error("sth went wrong...");
  console.err(err);
}
//# sourceMappingURL=services.js.map