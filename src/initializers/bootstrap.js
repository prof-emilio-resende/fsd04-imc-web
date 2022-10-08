import '../index.scss';

import ImcTableView from '../views/ImcTableView.js';
import ImcTableController from '../controllers/ImcTableController.js'
import ImcController from '../controllers/ImcController.js';

import ImcView from '../views/ImcView.js';
import ImcFormView from '../views/ImcFormView.js';

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
