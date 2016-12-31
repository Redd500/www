"use strict";
var enemy_slot_1 = require("./enemy-slot");
var hero_slot_1 = require("./hero-slot");
var bandit_info_1 = require("./bandit-info");
var warrior_info_1 = require("./warrior-info");
var black_mage_info_1 = require("./black-mage-info");
var wolf_info_1 = require("./wolf-info");
var dead_hero_info_1 = require("./dead-hero-info");
var dead_enemy_info_1 = require("./dead-enemy-info");
var GameInfo = (function () {
    function GameInfo() {
        this.title = 'Wonderful Web War';
        this.money = 0;
        this.maxHeroCost = 100;
        this.maxHeroCostMultiplier = 1.1;
        this.maxEnemyCost = 50;
        this.maxEnemyCostMultiplier = 1.07;
        this.miniTicksToTick = 5;
        this.miniTicks = 5;
        this.maxEnemies = 4;
        this.enemies = [];
        this.maxHeroes = 4;
        this.heroes = [];
        this.allEnemyInfo = [new bandit_info_1.BanditInfo(), new wolf_info_1.WolfInfo()];
        this.allHeroInfo = [new warrior_info_1.WarriorInfo(), new black_mage_info_1.BlackMageInfo()];
        this.deadHeroInfo = new dead_hero_info_1.DeadHeroInfo();
        this.deadEnemyInfo = new dead_enemy_info_1.DeadEnemyInfo();
        for (var x = 0; x < this.maxHeroes; x++) {
            this.heroes.push(new hero_slot_1.HeroSlot(this));
        }
        for (var x = 0; x < this.maxEnemies; x++) {
            this.enemies.push(new enemy_slot_1.EnemySlot(this));
        }
    }
    GameInfo.prototype.getHeroesByGreatestSpeed = function () {
        return this.heroes.concat().sort(function (h1, h2) { return h2.hero.speedPriority - h1.hero.speedPriority; });
    };
    GameInfo.prototype.getEnemiesByGreatestSpeed = function () {
        return this.enemies.concat().sort(function (e1, e2) { return e2.enemy.speedPriority - e1.enemy.speedPriority; });
    };
    GameInfo.prototype.getHeroesWithGreatestThreat = function () {
        var targets = this.heroes.concat().sort(function (h1, h2) { return h2.hero.damagePriority - h1.hero.damagePriority; });
        var aliveTargets = targets.filter(function (slot) { return slot.hero.health > 0; });
        return aliveTargets.filter(function (slot) { return slot.hero.damagePriority == aliveTargets[0].hero.damagePriority; });
    };
    GameInfo.prototype.getEnemiesWithGreatestThreat = function () {
        var targets = this.enemies.concat().sort(function (e1, e2) { return e2.enemy.damagePriority - e1.enemy.damagePriority; });
        var aliveTargets = targets.filter(function (slot) { return slot.enemy.health > 0; });
        return aliveTargets.filter(function (slot) { return slot.enemy.damagePriority == aliveTargets[0].enemy.damagePriority; });
    };
    return GameInfo;
}());
exports.GameInfo = GameInfo;
//# sourceMappingURL=game-info.js.map