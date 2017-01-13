"use strict";
var stat_1 = require('./stat');
var Bleed = (function () {
    function Bleed(nm, pwr, tcks, desc) {
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
    Bleed.prototype.applyEffectBefore = function (game, affected) {
        affected.health -= this.power;
    };
    Bleed.prototype.applyEffectAfter = function (game, affected) {
        affected.health -= this.power * 2;
        this.ticks--;
    };
    return Bleed;
}());
exports.Bleed = Bleed;
//# sourceMappingURL=bleed.js.map