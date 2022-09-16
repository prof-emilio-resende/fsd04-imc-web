window.onload = function(evt) {
    console.log(evt);

    var imcTableView = new ImcTableView();
    var tableController = new ImcTableController();
    tableController.registerStateListener(imcTableView);
    tableController.getTableData();

    var view = new ImcView();
    var formView = new ImcFormView();
    
    var controller = new ImcController();
    controller.registerStateListener(view);
    controller.registerStateListener(formView);

    var btn = document.querySelector('#main-action');
    btn.addEventListener('click', function() {
        controller.doCalculateImc();
    });
}
