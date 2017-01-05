"use strict";
var stat_1 = require('./stat');
var BlackMage = (function () {
    function BlackMage(hlth, spd, dmg, abl, eff) {
        this.name = "Black Mage";
        this.maxHealth = hlth;
        this.health = hlth;
        this.speedPriority = spd;
        this.damagePriority = dmg;
        this.stats = [
            new stat_1.Stat('Speed Priority', 'This determines who gets to use their abilities first, from highest to lowest priority', spd),
            new stat_1.Stat('Damage Priority', 'This determines who gets attacked by their opponents\' abilities first, from highest to lowest priority', dmg)
        ];
        var newAbl = [];
        for (var _i = 0, abl_1 = abl; _i < abl_1.length; _i++) {
            var x = abl_1[_i];
            newAbl.push(x.createAbility());
        }
        this.abilities = newAbl;
        var newEff = [];
        for (var _a = 0, eff_1 = eff; _a < eff_1.length; _a++) {
            var x = eff_1[_a];
            newEff.push(x.createStatusEffect());
        }
        this.statusEffects = newEff;
    }
    BlackMage.prototype.nextTick = function (game) {
        this.applyStatusEffectsBefore(game);
        if (this.health <= 0) {
            return;
        }
        this.useAbilities(game);
        this.applyStatusEffectsAfter(game);
        this.removeStatusEffects();
    };
    BlackMage.prototype.useAbilities = function (game) {
        for (var _i = 0, _a = this.abilities; _i < _a.length; _i++) {
            var x = _a[_i];
            x.nextTick(1, game, this);
        }
    };
    BlackMage.prototype.applyStatusEffectsBefore = function (game) {
        for (var _i = 0, _a = this.statusEffects; _i < _a.length; _i++) {
            var x = _a[_i];
            x.applyEffectBefore(game, this);
        }
    };
    BlackMage.prototype.applyStatusEffectsAfter = function (game) {
        for (var _i = 0, _a = this.statusEffects; _i < _a.length; _i++) {
            var x = _a[_i];
            x.applyEffectAfter(game, this);
        }
    };
    BlackMage.prototype.takeHit = function (pwr, eff) {
        this.health -= pwr;
        for (var _i = 0, eff_2 = eff; _i < eff_2.length; _i++) {
            var x = eff_2[_i];
            this.statusEffects.push(x.createStatusEffect());
        }
    };
    BlackMage.prototype.removeStatusEffects = function () {
        var x = 0;
        while (x < this.statusEffects.length) {
            if (this.statusEffects[x].ticks && this.statusEffects[x].ticks <= 0) {
                this.statusEffects.splice(x, 1);
            }
            else {
                x++;
            }
        }
    };
    return BlackMage;
}());
exports.BlackMage = BlackMage;
//# sourceMappingURL=black-mage.js.map