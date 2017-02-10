"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MenuClassComponent = (function () {
    function MenuClassComponent() {
        this.showLineIf = true;
        this.color = "red";
        this.colors = ["Red", "Green", "Blue"];
    }
    return MenuClassComponent;
}());
MenuClassComponent = __decorate([
    core_1.Component({
        selector: 'my-menu',
        template: "\n    <h1>This is my menu</h1>  \n    <h3 *ngIf=\"showLineIf\">This is ngIf directive for</h3>\n    <div [ngSwitch]=\"color\">\n        <p *ngSwitchCase=\"'red'\">This is Red color</p>\n        <p *ngSwitchCase=\"'yellow'\">This is Yellow color</p>\n        <p *ngSwitchCase=\"'blue'\">This is Blue color</p>        \n        <p *ngSwitchDefault>Invalid color</p>    \n    </div>\n\n    <ul>\n        <li *ngFor=\"let color of colors\">{{color}}</li>\n    </ul>\n    "
    })
], MenuClassComponent);
exports.MenuClassComponent = MenuClassComponent;
//# sourceMappingURL=menu.component.js.map