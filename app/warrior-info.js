"use strict";
var warrior_1 = require('./warrior');
var strike_info_1 = require('./strike-info');
var WarriorInfo = (function () {
    function WarriorInfo() {
        this.maxHealth = 400;
        this.speedPriority = 1;
        this.damagePriority = 5;
        this.defense = 2;
        this.abilities = [new strike_info_1.StrikeInfo(), new strike_info_1.StrikeInfo()];
        this.statusEffects = [];
    }
    WarriorInfo.prototype.createHero = function () {
        return new warrior_1.Warrior(this.maxHealth, this.speedPriority, this.damagePriority, this.defense, this.abilities, this.statusEffects);
    };
    return WarriorInfo;
}());
exports.WarriorInfo = WarriorInfo;
//# sourceMappingURL=warrior-info.js.map