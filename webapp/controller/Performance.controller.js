sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "stk/starterkit/model/formatter", // potrzebne do formatera imienia i nazwika
  "stk/starterkit/model/calculate" // potrzebne do kalkulacji działa podobnie jak formatter
], function (Controller, formatter, calculate) {
  "use strict";

  return Controller.extend("stk.starterkit.controller.Performance", { Formatter :formatter, Calculate :calculate, 
    onInit: function () {
         const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
     oRouter.getRoute("Performance").attachPatternMatched(this._onPatternMatched, this); //pobranie danych z routera - zarzadzanie nawigacja miedzy widokami
      // później podczeniam funkcje ➡️ "Kiedy użytkownik wejdzie na ten route → wykonaj _onPatternMatched"
    
        },
  _onPatternMatched: function (oEvent) { 
    this.getView().bindElement({ path: "/Customers" , 
      parameters: { expand: "Orders, Orders/Order_Details , Orders/Employee" }  });                
         }, // ➡️ Bindowanie całego widoku do jednego obiektu pobranie 
         // expand to pobranie powiązanych danych  
       
          // obsługa przycisku back
         handleNavButtonPress: function () {
    var oHistory = sap.ui.core.routing.History.getInstance();
    var sPreviousHash = oHistory.getPreviousHash();
 
    if (sPreviousHash !== undefined) {
        window.history.go(-1);
    } else {
        this.getOwnerComponent().getRouter().navTo("CustomersList", {}, true);
    }
},
// opcjonalnie pobiera API i pokazuje toast
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
