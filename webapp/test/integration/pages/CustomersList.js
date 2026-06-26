sap.ui.define([
    "sap/ui/test/Opa5", 
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
    "use strict";

    const sViewName = "CustomersList";

    Opa5.createPageObjects({
        onTheCustomersListPage: {

            actions: {},

            assertions: {
                iShouldSeeTheCustomersList: function () {
                    return this.waitFor({
                        viewName: sViewName,
                        id: "CustomersListID",
                        success: function () {
                            Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
                        },
                        errorMessage: "Did not find the " + sViewName + " view"
                    });
                },

                iShouldFindTheTable: function () {
                    return this.waitFor({
                        id: "customersTableID",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The table  is displayed");
                        },
                        errorMessage: "Did not find the table "
                    });
                }
            }
        }
    });
});
