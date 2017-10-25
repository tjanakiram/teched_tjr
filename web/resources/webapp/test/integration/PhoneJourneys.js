jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"sunny/test/integration/NavigationJourneyPhone",
		"sunny/test/integration/NotFoundJourneyPhone",
		"sunny/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});