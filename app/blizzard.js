"use strict";
var stat_1 = require('./stat');
var Blizzard = (function () {
    function Blizzard(nm, cd, pwr, trg, desc) {
        this.name = nm;
        this.cooldown = cd;
        this.ticks = 0;
        this.power = pwr;
        this.targets = trg;
        this.description = desc;
        this.stats = [
            new stat_1.Stat('Cooldown', 'How many ticks it takes for the ability to be used.', cd),
            new stat_1.Stat('Power', 'The amount of damage this attack will do per hit.', pwr),
            new stat_1.Stat('Targets', 'The number of opponents that this ability targets', trg)
        ];
    }
    Blizzard.prototype.nextTick = function (spd, game, user) {
        this.ticks += spd;
        while (this.ticks >= this.cooldown) {
            this.ticks -= this.cooldown;
            this.useAbility(game, user);
        }
    };
    Blizzard.prototype.useAbility = function (game, user) {
        if (!user.bounty) {
            for (var _i = 0, _a = game.enemies; _i < _a.length; _i++) {
                var x = _a[_i];
                x.takeHit(this.power, []);
            }
        }
        else {
            for (var _b = 0, _c = game.heroes; _b < _c.length; _b++) {
                var x = _c[_b];
                x.takeHit(this.power, []);
            }
        }
    };
    return Blizzard;
}());
exports.Blizzard = Blizzard;
//# sourceMappingURL=blizzard.js.map