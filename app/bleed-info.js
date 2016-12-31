"use strict";
var bleed_1 = require("./bleed");
var BleedInfo = (function () {
    function BleedInfo() {
        this.damage = 1;
        this.maxTicks = 5;
    }
    BleedInfo.prototype.createStatusEffect = function () {
        return new bleed_1.Bleed(this.damage, this.maxTicks);
    };
    return BleedInfo;
}());
exports.BleedInfo = BleedInfo;
//# sourceMappingURL=bleed-info.js.map