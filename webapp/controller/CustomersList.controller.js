sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/export/library",
     "sap/ui/export/Spreadsheet",
],
function (Controller , Sorter, Filter , FilterOperator, Library, Spreadsheet) { 
    "use strict";

    return Controller.extend("stk.starterkit.controller.CustomersList", {
        onInit() {
    //         debugger
    //      const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    //  oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
        },
          //// pobranie oRouter (wcześniej zostały dodanir w manifest.json) i nawigacja do innego ekranu z konkretnym parametrem 
       onCustomerPress: function (oEvent) {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        debugger
        oRouter.navTo("CustomerDetails", {   CustomerID : oEvent.getSource().getBindingContext().getObject().CustomerID

        });
    },
           //// pobranie oRouter (wcześniej zostały dodanir w manifest.json) i nawigacja do innego ekranu z konkretnym parametrem 
 
//          _onPatternMatched: 
//         //  async
//           function (oEvent) {
// this.getView().bindElement({ path: "/Customer('" + oEvent.getParameter("arguments").CustomerID + "')" });            
//             // const oModel = this.getOwnerComponent().getModel();
//             // const oCustomersModel = this.getOwnerComponent().getModel("CustomersProperties");
//             // oCustomersModel.setProperty("/noCustomers", iTableRows );
//          },
         getNOCustomers: function () { 
            debugger
            return this.byId("customerTable").getItems().length;  // funkcja zliczania ilości wierszy dla tabeli 
         },
         // sortowanie po kraju - mamy pole z niego za pomocą getvalue pobieramy wartość - kraju i jest to sortowane 
        onSortByCountry: function() {
const oTable = this.byId("customerTable"); //Pobiera tabelę z widoku o ID customerTable
            const oBinding = oTable.getBinding("items"); // Pobiera powiązanie danych (binding) dla elementów tabeli(czyli dane, które są wyświetlane)
            let aSorter = []; // Tworzy pustą tablicę sorterów (reguł sortowania)
            const bOppositeValue = oBinding.aSorters && oBinding.aSorters[0]
                ? !oBinding.aSorters[0].bDescending
                : true; //jeśli tabela już była posortowana → odwróć kolejność jeśli NIE → ustaw sortowanie malejące (true) ! - not czyli !true to false , ? : ; - if... else ...;
            const oSorter = new Sorter("Country", bOppositeValue); //„stwórz sorter dla pola Country z kierunkiem (asc/desc)” - a wcześniej określalismy w ife asc/des
            aSorter.push(oSorter); // dodaj sort do listy
            oBinding.sort(aSorter); // sortuje tabele wedlug regul 
    $("table").removeClass("myClass");
    }, //jQuery - działanie na wyglądzie klasa zdefiniowana w css - działa na tabeli
  //filtowanie po company name 
        setCompanyFilter: function (oEvent) {
       let  aFilters = []; // utworzenie pustej tabeli filteów
    const oTable = this.getView().byId("customerTable"); //pobranie tabeli z widoku
    const oBinding = oTable.getBinding("items");   // pobranie bindingu (powiązania danych) tabeli
    const sCompanyName = oEvent.getSource().getValue(); //pobranie wartosci z pola typu input
    const oFilter = new sap.ui.model.Filter(
        "CompanyName",
        sap.ui.model.FilterOperator.Contains,
        sCompanyName
    );  // utworzenie filtra dla pola CompanyName
    aFilters.push(oFilter);  // dodanie filtra do tablicy filtrów
    oBinding.filter(aFilters); /i/ zastosowanie filtrów do tabel
    const iTableRows = this.getNOCustomers();    // pobranie liczby rekordów (wywołanie metody)
    oCustomersModel.setProperty("/noCustomers", iTableRows );   // ustawienie liczby rekordów w modelu
},
  //// dodanie przycisku do generowania pliku excel
   onPressGenerateExcelReport: function () {
    const oModel = this.getOwnerComponent().getModel(); // model
    const oServiceUrl = this.getView().getModel().getServiceUrl(); // path
    const oEntity = oModel // entity
        .getServiceMetadata()
        .dataServices.schema[0].entityType
        .find(oEntity => oEntity.name === "Customer").property;
    const aCols = oEntity.map(oProp => ({ // entity properties
        label: oProp.name,
        type: oProp.type,
        property: oProp.name
    }));
    const oSettings = { // spreadsheet settings
        workbook: { columns: aCols },
        dataSource: {
            type: "OData",
            dataUrl: `${oServiceUrl}/Customers`,
            serviceUrl: oServiceUrl,
            headers: {
                Accept: "application/json",
                "Accept-Language": "en",
                "sap-cancel-on-close": "true",
                DataServiceVersion: "2.0",
                Connection: "keep-alive"
            }
        },
        fileName: "Customers.xlsx",
        worker: true,
        sizeLimit: 500
    };
 const oSheet = new sap.ui.export.Spreadsheet(oSettings);
    oSheet.build().finally(function () {
        oSheet.destroy();
    });
},
          //// dodanie przycisku do generowania pliku excel
          //// pobranie oRouter (wcześniej zostały dodanir w manifest.json) i nawigacja do innego ekranu 
_onCreateCustomer: function (oEvent) {
    var oRouter = sap.ui.core.UIComponent.getRouterFor(this); /// pobranie routera
    debugger
    oRouter.navTo("CreateCustomer") /// podanie nazwy ekranu 
},
onPerformance: function (oEvent) {
    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    debugger
    oRouter.navTo("Performance" ) 
}    //// pobranie oRouter (wcześniej zostały dodanir w manifest.json) i nawigacja do innego ekranu 
    }); 
});

