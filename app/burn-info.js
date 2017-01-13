"use strict";
var burn_1 = require('./burn');
var stat_1 = require('./stat');
var BurnInfo = (function () {
    function BurnInfo() {
        this.name = 'Burn';
        this.power = 7;
        this.maxTicks = 5;
        this.description = 'Deals damage equal to its Power stat after the affected unit\'s turn';
        this.stats = [
            new stat_1.Stat('Max Ticks', 'How long this status effect lasts when first applied.', this.maxTicks),
            new stat_1.Stat('Power', 'Affects how much damage this status effect deals.', this.power)
        ];
    }
    BurnInfo.prototype.createStatusEffect = function () {
        return new burn_1.Burn(this.name, this.power, this.maxTicks, this.description);
    };
    return BurnInfo;
}());
exports.BurnInfo = BurnInfo;
//# sourceMappingURL=burn-info.js.map