"use strict";
var bleed_info_1 = require('./bleed-info');
var tear_into_1 = require('./tear-into');
var TearIntoInfo = (function () {
    function TearIntoInfo() {
        this.cooldown = 7;
        this.power = 5;
        this.hits = 4;
        this.effects = [new bleed_info_1.BleedInfo()];
    }
    TearIntoInfo.prototype.createAbility = function () {
        return new tear_into_1.TearInto(this.cooldown, this.power, this.hits, this.effects);
    };
    return TearIntoInfo;
}());
exports.TearIntoInfo = TearIntoInfo;
//# sourceMappingURL=tear-into-info.js.map