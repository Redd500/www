"use strict";
var wolf_1 = require('./wolf');
var tear_into_info_1 = require('./tear-into-info');
var WolfInfo = (function () {
    function WolfInfo() {
        this.bounty = 8;
        this.maxHealth = 50;
        this.speedPriority = 2;
        this.damagePriority = 5;
        this.defense = 0;
        this.abilities = [new tear_into_info_1.TearIntoInfo()];
        this.statusEffects = [];
    }
    WolfInfo.prototype.createEnemy = function () {
        return new wolf_1.Wolf(this.bounty, this.maxHealth, this.speedPriority, this.damagePriority, this.defense, this.abilities, this.statusEffects);
    };
    return WolfInfo;
}());
exports.WolfInfo = WolfInfo;
//# sourceMappingURL=wolf-info.js.map