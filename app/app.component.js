"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Master .NET";
        //property binding
        this.image = "http://lorempixel.com/300/300";
        this.welcomText = "Hoc de phat trien ban than!";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>Hell Online Angular 2 with {{title}}!</h1>\n  <my-menu></my-menu>\n  <img [src]=\"image\"/>\n  <input type=\"text\" [value] = \"welcomText\"/>\n  ",
        styles: ['h4 {color:blue;}']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map