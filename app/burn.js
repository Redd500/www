"use strict";
var Burn = (function () {
    function Burn(dmg, tcks) {
        this.name = 'Burn';
        this.damage = dmg;
        this.maxTicks = tcks;
        this.ticks = tcks;
    }
    Burn.prototype.applyEffectBefore = function (game, affected) {
    };
    Burn.prototype.applyEffectAfter = function (game, affected) {
        affected.health -= this.damage;
        this.ticks--;
    };
    return Burn;
}());
exports.Burn = Burn;
//# sourceMappingURL=burn.js.map