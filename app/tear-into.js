"use strict";
var TearInto = (function () {
    function TearInto(cd, pwr, hits, eff) {
        this.name = 'Tear Into';
        this.cooldown = cd;
        this.ticks = 0;
        this.power = pwr;
        this.hits = hits;
        this.effects = eff;
    }
    TearInto.prototype.nextTick = function (spd, game, user) {
        this.ticks += spd;
        while (this.ticks >= this.cooldown) {
            this.ticks -= this.cooldown;
            this.useAbility(game, user);
        }
    };
    TearInto.prototype.useAbility = function (game, user) {
        if (!user.bounty) {
            var targets = game.getEnemiesWithGreatestThreat();
            if (targets.length > 0) {
                var trg = targets[Math.floor(Math.random() * targets.length)];
                for (var x = 0; x < this.hits; x++) {
                    trg.takeHit(this.power, this.effects);
                }
            }
        }
        else {
            var targets = game.getHeroesWithGreatestThreat();
            if (targets.length > 0) {
                var trg = targets[Math.floor(Math.random() * targets.length)];
                for (var x = 0; x < this.hits; x++) {
                    trg.takeHit(this.power, this.effects);
                }
            }
        }
    };
    return TearInto;
}());
exports.TearInto = TearInto;
//# sourceMappingURL=tear-into.js.map