jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"sunny/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"sunny/test/integration/pages/App",
	"sunny/test/integration/pages/Browser",
	"sunny/test/integration/pages/Master",
	"sunny/test/integration/pages/Detail",
	"sunny/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "sunny.view."
	});

	sap.ui.require([
		"sunny/test/integration/MasterJourney",
		"sunny/test/integration/NavigationJourney",
		"sunny/test/integration/NotFoundJourney",
		"sunny/test/integration/BusyJourney",
		"sunny/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});