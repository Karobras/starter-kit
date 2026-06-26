sap.ui.define([
    "sap/ui/test/Opa5",
    "./AllJourneys"
], function (Opa5 ) {
    "use strict";
 
    QUnit.module("Integration Test");
 
    opaTest("Basic test", function (Given, When, Then) {
        Then.waitFor({
            success: function () {
                Opa5.assert.ok(true, "Test działa!");
            }
        });
    });
});