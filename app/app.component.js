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
var tutorial_component_1 = require("./tutorial.component");
var AppComponent = (function () {
    function AppComponent() {
        this.agree = 0;
        this.disgree = 0;
        this.arrPerson = ["Công Phượng", "Tuấn Anh", "Xuân Trường", "Văn Toàn"];
    }
    AppComponent.prototype.parentVote = function (agree) {
        if (agree)
            this.agree++;
        else
            this.disgree++;
    };
    AppComponent.prototype.changeName = function () {
        this.turtorial.setName("Change name is Parent");
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(tutorial_component_1.TutorialComponent),
    __metadata("design:type", tutorial_component_1.TutorialComponent)
], AppComponent.prototype, "turtorial", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>Hell Online Angular 2 with {{title}}!</h1>\n  <input type=\"text\" #txtName (keyup) = \"0\"/>\n  <br/>\n   <p>S\u1ED1 l\u01B0\u1EE3t \u0111\u1ED3ng \u00FD: {{agree}} - S\u1ED1 kh\u00F4ng \u0111\u1ED3ng \u00FD {{disgree}}</p>\n   <button (click) = \"changeName()\">\u0110\u1ED5i t\u00EAn</button>\n  <my-tutorial *ngFor=\"let em of arrPerson\" [name] = \"em\" (onVote) = \"parentVote($event)\"></my-tutorial>  \n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map