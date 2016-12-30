"use strict";
var EnemySlot = (function () {
    function EnemySlot(game) {
        this.maxRespawn = 5;
        this.respawn = 0;
        var newEnemyInfo = game.allEnemyInfo[Math.floor(Math.random() * game.allEnemyInfo.length)];
        this.newEnemy(newEnemyInfo);
    }
    EnemySlot.prototype.nextTick = function (game) {
        if (this.respawn > 0) {
            this.respawn--;
            if (this.respawn == 0) {
                var newEnemyInfo = game.allEnemyInfo[Math.floor(Math.random() * game.allEnemyInfo.length)];
                this.newEnemy(newEnemyInfo);
            }
        }
        else if (this.enemy.health > 0) {
            this.enemy.nextTick(game);
        }
    };
    EnemySlot.prototype.checkIfDead = function (game) {
        if (this.enemy.health <= 0 && this.respawn == 0) {
            game.money += this.enemy.bounty;
            this.newEnemy(game.deadEnemyInfo);
            this.respawn = this.maxRespawn;
        }
    };
    EnemySlot.prototype.newEnemy = function (info) {
        this.enemy = info.createEnemy();
    };
    EnemySlot.prototype.takeHit = function (pwr, eff) {
        this.enemy.takeHit(pwr, eff);
    };
    return EnemySlot;
}());
exports.EnemySlot = EnemySlot;
//# sourceMappingURL=enemy-slot.js.map