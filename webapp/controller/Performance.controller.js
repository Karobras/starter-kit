sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "stk/starterkit/model/formatter",
  "stk/starterkit/model/calculate"
], function (Controller, formatter, calculate) {
  "use strict";

  return Controller.extend("stk.starterkit.controller.Performance", { Formatter :formatter, Calculate :calculate,
    onInit: function () {
         const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
     oRouter.getRoute("Performance").attachPatternMatched(this._onPatternMatched, this);
    
        },
  _onPatternMatched: function (oEvent) { 
    this.getView().bindElement({ path: "/Customers" , 
      parameters: { expand: "Orders, Orders/Order_Details , Orders/Employee" }  });                
         },
         handleNavButtonPress: function () {
    var oHistory = sap.ui.core.routing.History.getInstance();
    var sPreviousHash = oHistory.getPreviousHash();
 
    if (sPreviousHash !== undefined) {
        window.history.go(-1);
    } else {
        this.getOwnerComponent().getRouter().navTo("CustomersList", {}, true);
    }
},
_oFire: function () { 
  debugger
 fetch("https://api.adviceslip.com/advice")
  .then(res => res.json())
  .then(data => {
    sap.m.MessageToast.show(data.slip.advice);
  })
  .catch(() => {
    sap.m.MessageToast.show("Stay strong, you got this! 💪");
  });;
}
  });
});