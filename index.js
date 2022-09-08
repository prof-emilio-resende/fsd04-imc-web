function buildRequest() {
    var request = null;
    try {
        request = new XMLHttpRequest();
    } catch {
        request = new ActiveXObject("Msxml2.XMLHTTP");
    }

    return request;
}

function handleCalculateAPI(request, callback) {
    return function() {
        if (request.readyState == 4) {
            if (request.status = 200) {
                // {
                //     "height": 1.77,
                //     "weight": 80.0,
                //     "imc": 25.53544639152223,
                //     "imcDescription": "Sobrepeso"
                // }
                var rawObj = JSON.parse(request.responseText);
                var imcPerson = new ImcPerson(
                    rawObj['height'],
                    rawObj['weight'],
                    rawObj['imc'],
                    rawObj['imcDescription']);
                callback(imcPerson);
            }
        }
    }
}

function calculateThroughAPI(person, callback) { 
    var req = buildRequest();
    req.onreadystatechange = handleCalculateAPI(req, callback);
    req.open('POST', 'http://localhost:8080/imc/calculate');
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify({'height':person.height, 'weight':person.weight}));
}


function buildCalculateImc() {
    var heightElem = document.querySelector('#altura');
    var weightElem = document.querySelector('#peso');
    console.log(heightElem);
    console.log(weightElem);

    return function() {
        var height = heightElem.value;
        var weight = weightElem.value;
        var person = new Person(height, weight);
        doCalculateImc(person);
    }
}

function doCalculateImc(person) {
    calculateThroughAPI(person, function(imcObj) {
        console.log('recebendo imcObj');
        console.log(imcObj);
        console.log(imcObj instanceof Person);
        console.log(ImcPerson.prototype.constructor);
        document
            .querySelector('#imc')
            .innerHTML = translateImcToText(imcObj);
    });
}

function Person(height, weight) {
    this.height = height;
    this.weight = weight;
}

function ImcPerson(height, weight, imc, imcDescription) {
    Person.call(this, height, weight);
    this.imc = imc;
    this.imcDescription = imcDescription;
}

ImcPerson.prototype = Object.create(Person.prototype);
ImcPerson.prototype.constructor = ImcPerson;

function translateImcToText(imcPerson) {
    return imcPerson.imc + " - [" + imcPerson.imcDescription + "]";
}

window.onload = function(evt) {
    console.log(evt);

    var btn = document.querySelector('#main-action');
    btn.addEventListener('click', buildCalculateImc());
}
