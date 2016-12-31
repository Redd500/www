"use strict";
var stun_1 = require("./stun");
var StunInfo = (function () {
    function StunInfo() {
        this.maxTicks = 2;
    }
    StunInfo.prototype.createStatusEffect = function () {
        return new stun_1.Stun(this.maxTicks);
    };
    return StunInfo;
}());
exports.StunInfo = StunInfo;
//# sourceMappingURL=stun-info.js.map