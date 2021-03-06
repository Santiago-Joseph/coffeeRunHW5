(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var DATABASE = firebase.firestore();
  //var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;
  //var remoteDS = new RemoteDataStore(SERVER_URL);
  //var webshim = window.webshim;
  var remoteDS = new RemoteDataStore(DATABASE);
    var myTruck = new Truck('ncc-1701', remoteDS);
    window.myTruck = myTruck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function(data) {
      myTruck.createOrder.call(myTruck, data);
      checkList.addRow.call(checkList, data);
    });
    checkList.initPending();
    formHandler.addInputHandler(Validation.isCompanyEmail);
  })(window);