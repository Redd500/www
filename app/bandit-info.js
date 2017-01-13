"use strict";
var bandit_1 = require('./bandit');
var strike_info_1 = require('./strike-info');
var BanditInfo = (function () {
    function BanditInfo() {
        this.bounty = 5;
        this.maxHealth = 220;
        this.speedPriority = 1;
        this.damagePriority = 3;
        this.abilities = [new strike_info_1.StrikeInfo()];
        this.statusEffects = [];
    }
    BanditInfo.prototype.createEnemy = function () {
        return new bandit_1.Bandit(this.bounty, this.maxHealth, this.speedPriority, this.damagePriority, this.abilities, this.statusEffects);
    };
    return BanditInfo;
}());
exports.BanditInfo = BanditInfo;
//# sourceMappingURL=bandit-info.js.map