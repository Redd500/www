"use strict";
var LightningBolt = (function () {
    function LightningBolt(cd, pwr, trg, eff) {
        this.name = 'Lightning Bolt';
        this.cooldown = cd;
        this.ticks = 0;
        this.power = pwr;
        this.targets = trg;
        this.effects = eff;
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