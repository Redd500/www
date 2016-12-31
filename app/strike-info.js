"use strict";
var strike_1 = require("./strike");
var StrikeInfo = (function () {
    function StrikeInfo() {
        this.cooldown = 3;
        this.targets = 1;
        this.power = 10;
    }
    StrikeInfo.prototype.createAbility = function () {
        return new strike_1.Strike(this.cooldown, this.targets, this.power);
    };
    return StrikeInfo;
}());
exports.StrikeInfo = StrikeInfo;
//# sourceMappingURL=strike-info.js.map