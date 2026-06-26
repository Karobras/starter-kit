// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/Sorter",
//     "sap/ui/model/Filter",
//     "sap/ui/model/FilterOperator",
//     "sap/ui/export/library",
//      "sap/ui/export/Spreadsheet",
// ],
// function (Controller , Sorter, Filter , FilterOperator, Library, Spreadsheet) { 
//     "use strict";

//     return Controller.extend("stk.starterkit.controller.Master", {
//         onInit() {
            
//             const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//             oRouter.getRoute("").attachPatternMatched(this._onPatternMatched, this);
//         },
//          _onPatternMatched: async function () {
            
//             const oModel = this.getOwnerComponent().getModel();
//             const oCustomersModel = this.getOwnerComponent().getModel("CustomersProperties");
//             oCustomersModel.setProperty("/noCustomers", iTableRows );
//          },
//          getNOCustomers: function () { 
            
//             return this.byId("customerTable").getItems().length; 
//          },
         
//         onSortByCountry: function() {
// const oTable = this.byId("customerTable");
//             const oBinding = oTable.getBinding("items");
//             let aSorter = [];
//             const bOppositeValue = oBinding.aSorters && oBinding.aSorters[0]
//                 ? !oBinding.aSorters[0].bDescending
//                 : true;
//             const oSorter = new Sorter("Country", bOppositeValue);
//             aSorter.push(oSorter);
//             oBinding.sort(aSorter);
//     },
//    setCompanyFilter: function (oEvent) {
//        let  aFilters = [];
//     const oTable = this.getView().byId("customerTable");
//     const oBinding = oTable.getBinding("items");
//     const sCompanyName = oEvent.getSource().getValue();
//     const oFilter = new sap.ui.model.Filter(
//         "CompanyName",
//         sap.ui.model.FilterOperator.Contains,
//         sCompanyName
//     );
//     aFilters.push(oFilter);
//     oBinding.filter(aFilters);
//     const iTableRows = this.getNOCustomers();
//     oCustomersModel.setProperty("/noCustomers", iTableRows );
// },
//    onPressGenerateExcelReport: function () {
//     const oModel = this.getOwnerComponent().getModel(); // model
//     const oServiceUrl = this.getView().getModel().getServiceUrl(); // path
//     const oEntity = oModel // entity
//         .getServiceMetadata()
//         .dataServices.schema[0].entityType
//         .find(oEntity => oEntity.name === "Customer").property;
//     const aCols = oEntity.map(oProp => ({ // entity properties
//         label: oProp.name,
//         type: oProp.type,
//         property: oProp.name
//     }));
//     const oSettings = { // spreadsheet settings
//         workbook: { columns: aCols },
//         dataSource: {
//             type: "OData",
//             dataUrl: `${oServiceUrl}/Customers`,
//             serviceUrl: oServiceUrl,
//             headers: {
//                 Accept: "application/json",
//                 "Accept-Language": "en",
//                 "sap-cancel-on-close": "true",
//                 DataServiceVersion: "2.0",
//                 Connection: "keep-alive"
//             }
//         },
//         fileName: "Customers.xlsx",
//         worker: true,
//         sizeLimit: 500
//     };
//  const oSheet = new sap.ui.export.Spreadsheet(oSettings);
//     oSheet.build().finally(function () {
//         oSheet.destroy();
//     });
// },
//     }); 
// });