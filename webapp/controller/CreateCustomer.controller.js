// obsługa wglądu dzięki którego dodawało się wpisu do tabeli - CRUD czy jakoś taqk
sap.ui.define([
      "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CreateCustomer", {
  
        onInit: function () {
        },
      // obsługa przycisku wyjścia 
       handleNavButtonPress: function () {
    var oHistory = sap.ui.core.routing.History.getInstance();
    var sPreviousHash = oHistory.getPreviousHash();
 
    if (sPreviousHash !== undefined) {
        window.history.go(-1);
    } else {
        this.getOwnerComponent().getRouter().navTo("CustomersList", {}, true);
    }   
       },
      // pobranie wartości z pola input , obranie tworzenia dla Custommers i wstawienie wartości pobranych - zapis i sukress lub error 
       _onConfirm: function (saveEvent) {
 var sId = this.byId("CustomerID").getValue();
var sName = this.byId("CompanyName").getValue();

this.getView().getModel().create("/Customers", {
    CustomerID: sId,
    CompanyName: sName
}, {
    success: function () {
        sap.m.MessageToast.show("Customer created successfully");
    },
    error: function () {
        sap.m.MessageToast.show("Error creating customer");
    }
});
   },  

});
});
