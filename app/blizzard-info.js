"use strict";
var blizzard_1 = require('./blizzard');
var BlizzardInfo = (function () {
    function BlizzardInfo() {
        this.name = 'Blizzard';
        this.cooldown = 12;
        this.power = 5;
        this.targets = "All";
        this.description = 'A blizzard is summoned to the battlefield.';
    }
    BlizzardInfo.prototype.createAbility = function () {
        return new blizzard_1.Blizzard(this.name, this.cooldown, this.power, this.targets, this.description);
    };
    return BlizzardInfo;
}());
exports.BlizzardInfo = BlizzardInfo;
//# sourceMappingURL=blizzard-info.js.map