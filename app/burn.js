"use strict";
var stat_1 = require('./stat');
var Burn = (function () {
    function Burn(nm, pwr, tcks, desc) {
        this.name = nm;
        this.power = pwr;
        this.maxTicks = tcks;
        this.ticks = tcks;
        this.description = desc;
        this.stats = [
            new stat_1.Stat('Max Ticks', 'How long this status effect lasts when first applied.', tcks),
            new stat_1.Stat('Power', 'Affects how much damage this status effect deals.', pwr)
        ];
    }
    Burn.prototype.applyEffectBefore = function (game, affected) {
    };
    Burn.prototype.applyEffectAfter = function (game, affected) {
        affected.health -= this.power;
        this.ticks--;
    };
    return Burn;
}());
exports.Burn = Burn;
//# sourceMappingURL=burn.js.map