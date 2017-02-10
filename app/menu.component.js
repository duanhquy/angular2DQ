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
        this.applyClass = true;
        this.blueColor = false;
    }
    MenuClassComponent.prototype.OnClick = function (value) {
        console.log(value);
    };
    return MenuClassComponent;
}());
MenuClassComponent = __decorate([
    core_1.Component({
        selector: 'my-menu',
        template: "\n    <h1>This is my menu</h1>  \n    <input type=\"text\" [(ngModel)] = \"fname\"/>\n    <input type=\"text\" [(ngModel)] = \"lname\"/>\n    <br/>\n    Full name : {{fname}} {{lname}}\n    ",
        styles: [".redColor{\n            color:red;\n        }"]
    })
], MenuClassComponent);
exports.MenuClassComponent = MenuClassComponent;
//# sourceMappingURL=menu.component.js.map