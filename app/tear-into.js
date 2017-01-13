"use strict";
var stat_1 = require('./stat');
var TearInto = (function () {
    function TearInto(nm, cd, pwr, hits, trg, eff, desc) {
        this.name = nm;
        this.cooldown = cd;
        this.ticks = 0;
        this.power = pwr;
        this.hits = hits;
        this.targets = trg;
        this.description = desc;
        this.effects = eff;
        this.stats = [
            new stat_1.Stat('Cooldown', 'How many ticks it takes for the ability to be used.', cd),
            new stat_1.Stat('Power', 'The amount of damage this attack will do per hit.', pwr),
            new stat_1.Stat('Targets', 'The number of opponents that this ability targets', trg),
            new stat_1.Stat('Hits', 'The amount of times the attack hits the same target', hits)
        ];
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
                    trg.takeHit(this.power, []);
                }
                trg.takeHit(0, this.effects);
            }
        }
        else {
            var targets = game.getHeroesWithGreatestThreat();
            if (targets.length > 0) {
                var trg = targets[Math.floor(Math.random() * targets.length)];
                for (var x = 0; x < this.hits; x++) {
                    trg.takeHit(this.power, []);
                }
                trg.takeHit(0, this.effects);
            }
        }
    };
    return TearInto;
}());
exports.TearInto = TearInto;
//# sourceMappingURL=tear-into.js.map