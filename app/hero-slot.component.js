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
var hero_slot_1 = require("./hero-slot");
var HeroSlotComponent = (function () {
    function HeroSlotComponent() {
    }
    return HeroSlotComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_slot_1.HeroSlot)
], HeroSlotComponent.prototype, "slot", void 0);
HeroSlotComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hero-slot',
        template: "\n\t\t<div class=\"name\">{{slot.hero.name}}</div>\n\t\t<div class=\"maxHealth\">\n\t\t\t<div class=\"health\"\n\t\t\t\t[style.width]=\"(slot.hero.health/slot.hero.maxHealth*100) + '%'\">\n\t\t\t</div>\n\t\t\t<div class=\"healthText\">\n\t\t\t\t{{slot.hero.health}}/{{slot.hero.maxHealth}}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"respawn\">\n\t\t\tRespawn: {{slot.respawn}}\n\t\t</div>\n\t",
        styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t\tpadding: 2px;\n\t\t}\n\t\n\t\t.maxHealth {\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\theight: 15px;\n\t\t\tbackground-color: #9b1414;\n\t\t}\n\t\t\n\t\t.healthText {\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t\tcolor: white;\n\t\t\tline-height: 1em;\n\t\t\tposition: absolute;\n\t\t}\n\t\t\n\t\t.health {\n\t\t\tposition: absolute;\n\t\t\theight: 100%;\n\t\t\tbackground-color: #19a01b;\n\t\t}\n\t"]
    }),
    __metadata("design:paramtypes", [])
], HeroSlotComponent);
exports.HeroSlotComponent = HeroSlotComponent;
//# sourceMappingURL=hero-slot.component.js.map