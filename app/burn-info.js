"use strict";
var burn_1 = require('./burn');
var BurnInfo = (function () {
    function BurnInfo() {
        this.damage = 7;
        this.maxTicks = 5;
    }
    BurnInfo.prototype.createStatusEffect = function () {
        return new burn_1.Burn(this.damage, this.maxTicks);
    };
    return BurnInfo;
}());
exports.BurnInfo = BurnInfo;
//# sourceMappingURL=burn-info.js.map