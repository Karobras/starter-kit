sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "stk/starterkit/model/formatter",
  "sap/ui/core/Fragment" //popup nowe oko z info 
], function (Controller, formatter, Fragment ) {
  "use strict";

  return Controller.extend("stk.starterkit.controller.CustomerDetails", { Formatter :formatter,
    onInit: function () {
         const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
     oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this); //pobranie routera i później wywołanie funkcji 
        },
  _onPatternMatched: function (oEvent) { 
    this.getView().bindElement({ path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')", 
      parameters: { expand: "Orders, Orders/Order_Details , Orders/Employee" }  });  //pobranie jednej ścieżki do rekordu i dobranie expand czyli dodatkowych 
         },
      // przycisk wyjścia obsługa                                                                 
         handleNavButtonPress: function () {
    var oHistory = sap.ui.core.routing.History.getInstance();
    var sPreviousHash = oHistory.getPreviousHash();
 
    if (sPreviousHash !== undefined) {
        window.history.go(-1);
    } else {
        this.getOwnerComponent().getRouter().navTo("CustomersList", {}, true);
    }
}, 
   //kod do formatera - wywołanie popup 
  _onDetailsInfo: function () { 
var oView = this.getView();
if(!this.byId("ContactInfoDialog")) {
Fragment.load({  id: oView.getId(),
   name: "stk.starterkit.view.ContactInfoDialog",
   controller: this }).then(function (oDialog) {
oView.addDependent(oDialog);
oDialog.open();
});
} else {
this.byId("ContactInfoDialog").open();
}
  },
   _onClose: function () {
    debugger
  //  if (!this.oDialog) {
  //   this.oDialog = sap.ui.xmlfragment("stk.starterkit.view.ContactInfoDialog", this);
  //   this.getView().addDependent(this.oDialog);}
   this.byId("ContactInfoDialog").close();
  }
//     }
  });
});

