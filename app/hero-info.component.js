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
var core_1 = require('@angular/core');
var hero_slot_1 = require('./hero-slot');
var HeroInfoComponent = (function () {
    function HeroInfoComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_slot_1.HeroSlot)
    ], HeroInfoComponent.prototype, "slot", void 0);
    HeroInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-info',
            template: "\n\t\t<div class=\"name\">{{slot.hero.name}}</div>\n\t\t<div class=\"maxHealth\">\n\t\t\t<div class=\"health\"\n\t\t\t\t[style.width]=\"(slot.hero.health/slot.hero.maxHealth*100) + '%'\">\n\t\t\t</div>\n\t\t\t<div class=\"healthText\">\n\t\t\t\t{{slot.hero.health}}/{{slot.hero.maxHealth}}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"respawn\">\n\t\t\tRespawn: {{slot.respawn}}\n\t\t</div>\n\t\t<div class=\"stats\">\n\t\t</div>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"abilities\">\n\t\t\t\t<div class=\"infoTitle\">\n\t\t\t\t\tAbilities\n\t\t\t\t</div>\n\t\t\t\t<div class=\"listSlot\" *ngFor=\"let ability of slot.hero.abilities\">\n\t\t\t\t\t<div class=\"abilityName\">\n\t\t\t\t\t\t{{ability.name}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"abilityMaxCooldown\">\n\t\t\t\t\t\t<div class=\"abilityCooldown\"\n\t\t\t\t\t\t\t[style.width]=\"(ability.ticks/ability.cooldown*100) + '%'\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"abilityCooldownText\">\n\t\t\t\t\t\t\t{{ability.ticks}}/{{ability.cooldown}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"effects\">\n\t\t\t\t<div class=\"infoTitle\">\n\t\t\t\t\tEffects\n\t\t\t\t</div>\n\t\t\t\t<div class=\"listSlot\" *ngFor=\"let effect of slot.hero.statusEffects\">\n\t\t\t\t\t<div class=\"effectName\">\n\t\t\t\t\t\t{{effect.name}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"effect.ticks != undefined\">\n\t\t\t\t\t\tTicks left: {{effect.ticks}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"effect.ticks == undefined\">\n\t\t\t\t\t\tIndefinite\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t\tpadding: 2px;\n\t\t}\n\t\n\t\t.maxHealth {\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\theight: 15px;\n\t\t\tbackground-color: #9b1414;\n\t\t}\n\t\t\n\t\t.healthText {\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t\tcolor: white;\n\t\t\tline-height: 1em;\n\t\t\tposition: absolute;\n\t\t}\n\t\t\n\t\t.health {\n\t\t\tposition: absolute;\n\t\t\theight: 100%;\n\t\t\tbackground-color: #19a01b;\n\t\t}\n\t\t\n\t\t.container {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tjustify-content: space-around;\n\t\t\talign-items: flex-start;\n\t\t\theight: 100%;\n\t\t}\n\t\t\n\t\t.abilities {\n\t\t\twidth: 45%;\n\t\t}\n\t\t\n\t\t.abilityMaxCooldown {\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\theight: 15px;\n\t\t\tbackground-color: #e2e2e2;\n\t\t}\n\t\t\n\t\t.abilityCooldown {\n\t\t\tposition: absolute;\n\t\t\theight: 100%;\n\t\t\tbackground-color: #857cff;\n\t\t}\n\t\t\n\t\t.abilityCooldownText {\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t\tcolor: black;\n\t\t\tline-height: 1em;\n\t\t\tposition: absolute;\n\t\t}\n\t\t\n\t\t.effects {\n\t\t\twidth: 45%;\n\t\t}\n\t\t\n\t\t.infoTitle {\n\t\t\tmargin-top: 20px;\n\t\t\tmargin-bottom: 5px;\n\t\t\tborder-bottom: 2px solid;\n\t\t}\n\t\t\n\t\t.listSlot {\n\t\t\tmargin-top: 10px;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroInfoComponent);
    return HeroInfoComponent;
}());
exports.HeroInfoComponent = HeroInfoComponent;
//# sourceMappingURL=hero-info.component.js.map