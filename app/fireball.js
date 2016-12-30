"use strict";
var Fireball = (function () {
    function Fireball(cd, pwr, eff) {
        this.name = 'Fireball';
        this.cooldown = cd;
        this.ticks = 0;
        this.power = pwr;
        this.effects = eff;
    }
    Fireball.prototype.nextTick = function (spd, game, user) {
        this.ticks += spd;
        while (this.ticks >= this.cooldown) {
            this.ticks -= this.cooldown;
            this.useAbility(game, user);
        }
    };
    Fireball.prototype.useAbility = function (game, user) {
        if (!user.bounty) {
            var targets = game.getEnemiesWithGreatestThreat();
            if (targets.length > 0) {
                targets[Math.floor(Math.random() * targets.length)].takeHit(this.power, this.effects);
            }
        }
        else {
            var targets = game.getHeroesWithGreatestThreat();
            if (targets.length > 0) {
                targets[Math.floor(Math.random() * targets.length)].takeHit(this.power, this.effects);
            }
        }
    };
    return Fireball;
}());
exports.Fireball = Fireball;
//# sourceMappingURL=fireball.js.map