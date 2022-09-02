function buildCalculateImc() {
    var heightElem = document.querySelector('#altura');
    var weightElem = document.querySelector('#peso');
    console.log(heightElem);
    console.log(weightElem);

    return function() {
        var height = heightElem.value;
        var weight = weightElem.value;

        doCalculateImc(height, weight);
    }
}

function doCalculateImc(height, weight) {
    var imc = (weight / (height ** 2));
    document
        .querySelector('#imc')
        .innerHTML = translateImcToText(imc);
}

// Magreza, quando o resultado é menor que 18,5 kg/m2;
// Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
// Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
// Obesidade, quando o resultado é maior que 30 kg/m2;
function translateImcToText(imc) {
    if (imc < 18.5) return "Magreza";
    if (imc < 24.9) return "Normal";
    if (imc < 30) return "Sobrepeso";

    return "Obesidade";
}

window.onload = function(evt) {
    console.log(evt);

    var btn = document.querySelector('#main-action');
    btn.addEventListener('click', buildCalculateImc());
}
