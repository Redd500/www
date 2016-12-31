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
var core_1 = require("@angular/core");
var game_info_1 = require("./game-info");
var GameInfoComponent = (function () {
    function GameInfoComponent() {
    }
    GameInfoComponent.prototype.selectHero = function (slot) {
        this.selectedHero = slot;
    };
    GameInfoComponent.prototype.selectEnemy = function (slot) {
        this.selectedEnemy = slot;
    };
    return GameInfoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", game_info_1.GameInfo)
], GameInfoComponent.prototype, "game", void 0);
GameInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'game-info',
        template: "\n\t\t<div class=\"title\">{{game.title}}</div>\n\t\t<div class=\"money\">{{game.money}} G</div>\n\t\t<div class=\"ticks\">{{game.miniTicks}}</div>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"column-1\">\n\t\t\t\tHeroes\n\t\t\t\t<div class=\"slot-holder\">\n\t\t\t\t\t<li class=\"slot-item\" *ngFor=\"let hero of game.heroes\" (click)=\"selectHero(hero)\">\n\t\t\t\t\t\t<hero-slot [slot]=\"hero\"></hero-slot>\n\t\t\t\t\t</li>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"column-2\">\n\t\t\t\tHero Info\n\t\t\t\t<div class=\"info-holder\">\n\t\t\t\t\t<div *ngIf=\"selectedHero\">\n\t\t\t\t\t\t<hero-info [slot]=\"selectedHero\"></hero-info>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"not-selected\" *ngIf=\"!selectedHero\">\n\t\t\t\t\t\tClick on a hero to see their detailed info\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"column-2\">\n\t\t\t\tEnemy Info\n\t\t\t\t<div class=\"info-holder\">\n\t\t\t\t\t<div *ngIf=\"selectedEnemy\">\n\t\t\t\t\t\t<enemy-info [slot]=\"selectedEnemy\"></enemy-info>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"not-selected\" *ngIf=\"!selectedEnemy\">\n\t\t\t\t\t\tClick on an enemy to see their detailed info\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"column-1\">\n\t\t\t\tEnemies\n\t\t\t\t<div class=\"slot-holder\">\n\t\t\t\t\t<li class=\"slot-item\" *ngFor=\"let enemy of game.enemies\" (click)=\"selectEnemy(enemy)\">\n\t\t\t\t\t\t<enemy-slot [slot]=\"enemy\"></enemy-slot>\n\t\t\t\t\t</li>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
        styles: ["\n\t\t.title {\n\t\t\tfont: bold 40px Tahoma, Geneva, sans-serif;\n\t\t\ttext-align: center;\n\t\t\tcolor: #8e1e1b;\n\t\t\tmargin: 10px;\n\t\t}\n\t\t\n\t\t.not-selected {\n\t\t\tmargin-top: 20px;\n\t\t}\n\t\t\n\t\t.money {\n\t\t\tfont: 25px Arial, Helvetica, sans-serif;\n\t\t\ttext-align: center;\n\t\t\tcolor: #d8a900;\n\t\t}\n\t\t\n\t\t.ticks {\n\t\t\ttext-align: center;\n\t\t}\n\t\t\n\t\t.container {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tjustify-content: space-around;\n\t\t\talign-items: flex-start;\n\t\t\theight: 100%;\n\t\t}\n\t\t\n\t\t.column-1 {\n\t\t\twidth: 20%;\n\t\t\theight: 80%;\n\t\t\tfont: 20px \"Lucida Console\", Monaco, monospace;\n\t\t\ttext-align: center;\n\t\t}\n\t\t\n\t\t.column-2 {\n\t\t\twidth: 25%;\n\t\t\theight: 80%;\n\t\t\tfont: 20px \"Lucida Console\", Monaco, monospace;\n\t\t\ttext-align: center;\n\t\t}\n\t\t\n\t\t.info-holder {\n\t\t\tfont: 15px \"Lucida Console\", Monaco, monospace;\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tborder: 3px solid;\n\t\t\toverflow-y: scroll;\n\t\t\tbackground-color: #f6f6f6;\n\t\t}\n\t\t\n\t\t.info-holder::-webkit-scrollbar {\n\t\t\twidth: 15px;\n\t\t\tbackground-color: transparent;\n\t\t\tborder-left: 3px solid;\n\t\t}\n\t\t\n\t\t.slot-holder {\n\t\t\tdisplay: inline-block;\n\t\t\tfont: 15px \"Lucida Console\", Monaco, monospace;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tborder: 3px solid;\n\t\t\toverflow-y: scroll;\n\t\t\tbackground-color: #f6f6f6;\n\t\t}\n\t\t\n\t\t.slot-holder::-webkit-scrollbar {\n\t\t\twidth: 15px;\n\t\t\tbackground-color: transparent;\n\t\t\tborder-left: 3px solid;\n\t\t}\n\t\t\n\t\t.slot-holder::-webkit-scrollbar-thumb {\n\t\t\twidth: 5px;\n\t\t\tbackground-color: black;\n\t\t}\n\t\t\n\t\t.slot-item {\n\t\t\tdisplay: block;\n\t\t\theight: 50px;\n\t\t\tborder: 1px solid;\n\t\t}\n\t\t\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t\theight: 70%;\n\t\t}\n\t"]
    }),
    __metadata("design:paramtypes", [])
], GameInfoComponent);
exports.GameInfoComponent = GameInfoComponent;
//# sourceMappingURL=game-info.component.js.map