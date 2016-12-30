"use strict";
var Bleed = (function () {
    function Bleed(dmg, tcks) {
        this.name = 'Bleed';
        this.damage = dmg;
        this.maxTicks = tcks;
        this.ticks = tcks;
    }
    Bleed.prototype.applyEffectBefore = function (game, affected) {
        affected.health -= this.damage;
    };
    Bleed.prototype.applyEffectAfter = function (game, affected) {
        affected.health -= this.damage * 2;
        this.ticks--;
    };
    return Bleed;
}());
exports.Bleed = Bleed;
//# sourceMappingURL=bleed.js.map