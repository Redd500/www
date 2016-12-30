"use strict";
var black_mage_1 = require('./black-mage');
var fireball_info_1 = require('./fireball-info');
var lightning_bolt_info_1 = require('./lightning-bolt-info');
var blizzard_info_1 = require('./blizzard-info');
var BlackMageInfo = (function () {
    function BlackMageInfo() {
        this.maxHealth = 20;
        this.speedPriority = 0.6;
        this.damagePriority = 2;
        this.defense = 0;
        this.abilities = [new fireball_info_1.FireballInfo(), new lightning_bolt_info_1.LightningBoltInfo(), new blizzard_info_1.BlizzardInfo()];
        this.statusEffects = [];
    }
    BlackMageInfo.prototype.createHero = function () {
        return new black_mage_1.BlackMage(this.maxHealth, this.speedPriority, this.damagePriority, this.defense, this.abilities, this.statusEffects);
    };
    return BlackMageInfo;
}());
exports.BlackMageInfo = BlackMageInfo;
//# sourceMappingURL=black-mage-info.js.map