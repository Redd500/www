"use strict";
var HeroSlot = (function () {
    function HeroSlot(game) {
        this.maxRespawn = 5;
        this.respawn = 0;
        var newHeroInfo = game.allHeroInfo[Math.floor(Math.random() * game.allHeroInfo.length)];
        this.newHero(newHeroInfo);
    }
    HeroSlot.prototype.nextTick = function (game) {
        if (this.respawn > 0) {
            this.respawn--;
            if (this.respawn == 0) {
                var newHeroInfo = game.allHeroInfo[Math.floor(Math.random() * game.allHeroInfo.length)];
                this.newHero(newHeroInfo);
            }
        }
        else if (this.hero.health > 0) {
            this.hero.nextTick(game);
        }
    };
    HeroSlot.prototype.checkIfDead = function (game) {
        if (this.hero.health <= 0 && this.respawn == 0) {
            this.newHero(game.deadHeroInfo);
            this.respawn = this.maxRespawn;
        }
    };
    HeroSlot.prototype.newHero = function (info) {
        this.hero = info.createHero();
    };
    HeroSlot.prototype.takeHit = function (pwr, eff) {
        this.hero.takeHit(pwr, eff);
    };
    return HeroSlot;
}());
exports.HeroSlot = HeroSlot;
//# sourceMappingURL=hero-slot.js.map