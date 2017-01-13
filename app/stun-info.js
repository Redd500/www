"use strict";
var stun_1 = require('./stun');
var stat_1 = require('./stat');
var StunInfo = (function () {
    function StunInfo() {
        this.name = 'Stun';
        this.maxTicks = 2;
        this.description = 'The affected unit cannot use abilities.';
        this.stats = [
            new stat_1.Stat('Max Ticks', 'How long this status effect lasts when first applied.', this.maxTicks)
        ];
    }
    StunInfo.prototype.createStatusEffect = function () {
        return new stun_1.Stun(this.name, this.maxTicks, this.description);
    };
    return StunInfo;
}());
exports.StunInfo = StunInfo;
//# sourceMappingURL=stun-info.js.map