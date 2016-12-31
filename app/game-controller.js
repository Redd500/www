"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var game_info_1 = require("./game-info");
var core_1 = require("@angular/core");
var GameController = (function () {
    function GameController() {
        this.game = new game_info_1.GameInfo();
    }
    GameController.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { return _this.nextTick(); }, 200);
    };
    GameController.prototype.nextTick = function () {
        this.game.miniTicks--;
        if (this.game.miniTicks == 0) {
            this.game.miniTicks = this.game.miniTicksToTick;
            var speedSortedHeroes = this.game.getHeroesByGreatestSpeed();
            var speedSortedEnemies = this.game.getEnemiesByGreatestSpeed();
            var currentHero = void 0;
            var currentEnemy = void 0;
            currentHero = speedSortedHeroes.shift();
            currentEnemy = speedSortedEnemies.shift();
            while (currentHero || currentEnemy) {
                if (!currentEnemy || (currentHero && currentHero.hero.speedPriority >= currentEnemy.enemy.speedPriority)) {
                    currentHero.nextTick(this.game);
                    currentHero = speedSortedHeroes.shift();
                }
                else if (!currentHero || (currentEnemy && currentEnemy.enemy.speedPriority > currentHero.hero.speedPriority)) {
                    currentEnemy.nextTick(this.game);
                    currentEnemy = speedSortedEnemies.shift();
                }
            }
            for (var _i = 0, _a = this.game.heroes; _i < _a.length; _i++) {
                var x = _a[_i];
                x.checkIfDead(this.game);
            }
            for (var _b = 0, _c = this.game.enemies; _b < _c.length; _b++) {
                var x = _c[_b];
                x.checkIfDead(this.game);
            }
        }
    };
    return GameController;
}());
GameController = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'game',
        template: "\n\t\t<game-info [game]=\"game\"></game-info>\n\t",
        styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t\theight: 100%;\n\t\t}\n\t"]
    }),
    __metadata("design:paramtypes", [])
], GameController);
exports.GameController = GameController;
var game = new GameController();
//# sourceMappingURL=game-controller.js.map