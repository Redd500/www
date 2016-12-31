"use strict";
var burn_info_1 = require("./burn-info");
var fireball_1 = require("./fireball");
var FireballInfo = (function () {
    function FireballInfo() {
        this.cooldown = 5;
        this.power = 15;
        this.effects = [new burn_info_1.BurnInfo()];
    }
    FireballInfo.prototype.createAbility = function () {
        return new fireball_1.Fireball(this.cooldown, this.power, this.effects);
    };
    return FireballInfo;
}());
exports.FireballInfo = FireballInfo;
//# sourceMappingURL=fireball-info.js.map