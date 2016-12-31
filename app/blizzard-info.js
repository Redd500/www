"use strict";
var blizzard_1 = require("./blizzard");
var BlizzardInfo = (function () {
    function BlizzardInfo() {
        this.cooldown = 12;
        this.power = 5;
        this.targets = "All";
    }
    BlizzardInfo.prototype.createAbility = function () {
        return new blizzard_1.Blizzard(this.cooldown, this.power, this.targets);
    };
    return BlizzardInfo;
}());
exports.BlizzardInfo = BlizzardInfo;
//# sourceMappingURL=blizzard-info.js.map