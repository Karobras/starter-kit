//formater do kalkupacji - obliczenia ilosci orderów 
sap.ui.define([], function () {
    "use strict";
 
    return {
       
ordersCount: function(oOrders) {
 
 if (Array.isArray(oOrders)) {
        return oOrders.length;
    }
}
 
    };
});
