window.onload = function(evt) {
    console.log(evt);
    var view = new ImcView();
    var formView = new ImcFormView();
    var controller = new ImcController(view);
    var btn = document.querySelector('#main-action');
    btn.addEventListener('click', function() {
        controller.doCalculateImc();
    });
}
