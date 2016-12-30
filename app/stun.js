"use strict";
var Stun = (function () {
    function Stun(tcks) {
        this.name = 'Stun';
        this.maxTicks = tcks;
        this.ticks = tcks;
        this.stun = 1;
    }
    Stun.prototype.applyEffectBefore = function (game, affected) {
        var numStuns = 0;
        for (var _i = 0, _a = affected.statusEffects; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x.speedUp) {
                this.stun += x.speedUp;
            }
            else if (x.speedDown) {
                this.stun -= x.speedDown;
            }
            else if (x.stun) {
                numStuns++;
            }
        }
        for (var _b = 0, _c = affected.abilities; _b < _c.length; _b++) {
            var x = _c[_b];
            x.ticks -= this.stun / numStuns;
        }
        this.stun = 1;
        this.ticks--;
    };
    Stun.prototype.applyEffectAfter = function (game, affected) {
    };
    return Stun;
}());
exports.Stun = Stun;
//# sourceMappingURL=stun.js.map