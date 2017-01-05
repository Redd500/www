"use strict";
var protractor_1 = require('protractor');
var AngularQuickstartPage = (function () {
    function AngularQuickstartPage() {
    }
    AngularQuickstartPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    AngularQuickstartPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AngularQuickstartPage;
}());
exports.AngularQuickstartPage = AngularQuickstartPage;
//# sourceMappingURL=app.po.js.map