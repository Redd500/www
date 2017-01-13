"use strict";
var strike_1 = require('./strike');
var StrikeInfo = (function () {
    function StrikeInfo() {
        this.name = 'Strike';
        this.cooldown = 3;
        this.power = 10;
        this.targets = 1;
        this.description = 'A simple attack.';
    }
    StrikeInfo.prototype.createAbility = function () {
        return new strike_1.Strike(this.name, this.cooldown, this.power, this.targets, this.description);
    };
    return StrikeInfo;
}());
exports.StrikeInfo = StrikeInfo;
//# sourceMappingURL=strike-info.js.map