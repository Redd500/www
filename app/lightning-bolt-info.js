"use strict";
var stun_info_1 = require('./stun-info');
var lightning_bolt_1 = require('./lightning-bolt');
var LightningBoltInfo = (function () {
    function LightningBoltInfo() {
        this.cooldown = 8;
        this.power = 10;
        this.targets = 3;
        this.effects = [new stun_info_1.StunInfo()];
    }
    LightningBoltInfo.prototype.createAbility = function () {
        return new lightning_bolt_1.LightningBolt(this.cooldown, this.power, this.targets, this.effects);
    };
    return LightningBoltInfo;
}());
exports.LightningBoltInfo = LightningBoltInfo;
//# sourceMappingURL=lightning-bolt-info.js.map