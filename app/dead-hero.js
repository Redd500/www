"use strict";
var DeadHero = (function () {
    function DeadHero(hlth, spd, dmg, def, abl, eff) {
        this.name = "Dead";
        this.maxHealth = hlth;
        this.health = 0;
        this.speedPriority = spd;
        this.damagePriority = dmg;
        this.defense = def;
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
    DeadHero.prototype.nextTick = function (game) {
        this.applyStatusEffectsBefore(game);
        this.useAbilities(game);
        this.applyStatusEffectsAfter(game);
        this.removeStatusEffects();
    };
    DeadHero.prototype.useAbilities = function (game) {
        for (var _i = 0, _a = this.abilities; _i < _a.length; _i++) {
            var x = _a[_i];
            x.nextTick(1, game, this);
        }
    };
    DeadHero.prototype.applyStatusEffectsBefore = function (game) {
        for (var _i = 0, _a = this.statusEffects; _i < _a.length; _i++) {
            var x = _a[_i];
            x.applyEffectBefore(game, this);
        }
    };
    DeadHero.prototype.applyStatusEffectsAfter = function (game) {
        for (var _i = 0, _a = this.statusEffects; _i < _a.length; _i++) {
            var x = _a[_i];
            x.applyEffectAfter(game, this);
        }
    };
    DeadHero.prototype.takeHit = function (pwr, eff) {
    };
    DeadHero.prototype.removeStatusEffects = function () {
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
    return DeadHero;
}());
exports.DeadHero = DeadHero;
//# sourceMappingURL=dead-hero.js.map