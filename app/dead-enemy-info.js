"use strict";
var dead_enemy_1 = require('./dead-enemy');
var DeadEnemyInfo = (function () {
    function DeadEnemyInfo() {
        this.bounty = 0;
        this.maxHealth = 1;
        this.speedPriority = 0;
        this.damagePriority = 0;
        this.abilities = [];
        this.statusEffects = [];
    }
    DeadEnemyInfo.prototype.createEnemy = function () {
        return new dead_enemy_1.DeadEnemy(this.bounty, this.maxHealth, this.speedPriority, this.damagePriority, this.abilities, this.statusEffects);
    };
    return DeadEnemyInfo;
}());
exports.DeadEnemyInfo = DeadEnemyInfo;
//# sourceMappingURL=dead-enemy-info.js.map