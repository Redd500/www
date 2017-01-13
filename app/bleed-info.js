"use strict";
var bleed_1 = require('./bleed');
var stat_1 = require('./stat');
var BleedInfo = (function () {
    function BleedInfo() {
        this.name = 'Bleed';
        this.power = 1;
        this.maxTicks = 5;
        this.description = 'Deals damage equal to its Power stat before the affected unit\'s turn, and deals damage equal to 2 times its Power stat after the affected unit\'s turn.';
        this.stats = [
            new stat_1.Stat('Max Ticks', 'How long this status effect lasts when first applied.', this.maxTicks),
            new stat_1.Stat('Power', 'Affects how much damage this status effect deals.', this.power)
        ];
    }
    BleedInfo.prototype.createStatusEffect = function () {
        return new bleed_1.Bleed(this.name, this.power, this.maxTicks, this.description);
    };
    return BleedInfo;
}());
exports.BleedInfo = BleedInfo;
//# sourceMappingURL=bleed-info.js.map