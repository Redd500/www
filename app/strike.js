"use strict";
var Strike = (function () {
    function Strike(cd, trg, pwr) {
        this.name = 'Strike';
        this.cooldown = cd;
        this.ticks = 0;
        this.power = pwr;
        this.targets = trg;
    }
    Strike.prototype.nextTick = function (spd, game, user) {
        this.ticks += spd;
        while (this.ticks >= this.cooldown) {
            this.ticks -= this.cooldown;
            this.useAbility(game, user);
        }
    };
    Strike.prototype.useAbility = function (game, user) {
        if (!user.bounty) {
            var targets = game.getEnemiesWithGreatestThreat();
            if (targets.length > 0) {
                targets[Math.floor(Math.random() * targets.length)].takeHit(this.power, []);
            }
        }
        else {
            var targets = game.getHeroesWithGreatestThreat();
            if (targets.length > 0) {
                targets[Math.floor(Math.random() * targets.length)].takeHit(this.power, []);
            }
        }
    };
    return Strike;
}());
exports.Strike = Strike;
//# sourceMappingURL=strike.js.map