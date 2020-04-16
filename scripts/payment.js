(function(window) {
  'use strict';
  var FORM_SELECTOR_PAYMENT = '[data-payment="form"]';
  var App = window.App;
  var FormHandler = App.FormHandler;
  var payForm = new FormHandler(FORM_SELECTOR_PAYMENT);
  payForm.addSubmitHandlerPayment();
})(window);