"use strict";
var stat_1 = require('./stat');
var LightningBolt = (function () {
    function LightningBolt(nm, cd, pwr, trg, eff, desc) {
        this.name = nm;
        this.cooldown = cd;
        this.ticks = 0;
        this.power = pwr;
        this.targets = trg;
        this.description = desc;
        this.effects = eff;
        this.stats = [
            new stat_1.Stat('Cooldown', 'How many ticks it takes for the ability to be used.', cd),
            new stat_1.Stat('Power', 'The amount of damage this attack will do per hit.', pwr),
            new stat_1.Stat('Targets', 'The number of opponents that this ability targets', trg)
        ];
    }
    LightningBolt.prototype.nextTick = function (spd, game, user) {
        this.ticks += spd;
        while (this.ticks >= this.cooldown) {
            this.ticks -= this.cooldown;
            this.useAbility(game, user);
        }
    };
    LightningBolt.prototype.useAbility = function (game, user) {
        if (!user.bounty) {
            var targets = game.getEnemiesWithGreatestThreat();
            if (targets.length > 0) {
                for (var x = 0; x < this.targets; x++) {
                    targets[Math.floor(Math.random() * targets.length)].takeHit(this.power, this.effects);
                }
            }
        }
        else {
            var targets = game.getHeroesWithGreatestThreat();
            if (targets.length > 0) {
                for (var x = 0; x < this.targets; x++) {
                    targets[Math.floor(Math.random() * targets.length)].takeHit(this.power, this.effects);
                }
            }
        }
    };
    return LightningBolt;
}());
exports.LightningBolt = LightningBolt;
//# sourceMappingURL=lightning-bolt.js.map