"use strict";
var burn_info_1 = require('./burn-info');
var fireball_1 = require('./fireball');
var FireballInfo = (function () {
    function FireballInfo() {
        this.name = 'Fireball';
        this.cooldown = 5;
        this.power = 15;
        this.targets = 1;
        this.description = 'A fireball is launched towards an opponent.';
        this.effects = [new burn_info_1.BurnInfo()];
    }
    FireballInfo.prototype.createAbility = function () {
        return new fireball_1.Fireball(this.name, this.cooldown, this.power, this.targets, this.effects, this.description);
    };
    return FireballInfo;
}());
exports.FireballInfo = FireballInfo;
//# sourceMappingURL=fireball-info.js.map