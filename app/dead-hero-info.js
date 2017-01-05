"use strict";
var dead_hero_1 = require('./dead-hero');
var DeadHeroInfo = (function () {
    function DeadHeroInfo() {
        this.maxHealth = 1;
        this.speedPriority = 0;
        this.damagePriority = 0;
        this.abilities = [];
        this.statusEffects = [];
    }
    DeadHeroInfo.prototype.createHero = function () {
        return new dead_hero_1.DeadHero(this.maxHealth, this.speedPriority, this.damagePriority, this.abilities, this.statusEffects);
    };
    return DeadHeroInfo;
}());
exports.DeadHeroInfo = DeadHeroInfo;
//# sourceMappingURL=dead-hero-info.js.map