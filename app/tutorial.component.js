"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.title = "2017";
        this.today = Date.now();
        this.pi = 3.141592;
        this.e = 2.718281828459045;
        this.object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
    }
    return TutorialComponent;
}());
TutorialComponent = __decorate([
    core_1.Component({
        selector: 'my-tutorial',
        template: "\n          <h2>{{title}}</h2>\n            <p>Today is {{today | date}}</p>\n    <p>Or if you prefer, {{today | date:'fullDate'}}</p>\n    <p>The time is {{today | date:'jmZ'}}</p>\n    <p>Date for VN {{today | date:'dd/MM/yyyy'}}</p>\n       <p>e (no formatting): {{e}}</p>\n    <p>e (3.1-5): {{e | number:'3.1-5'}}</p>\n    <p>pi (no formatting): {{pi}}</p>\n    <p>pi (3.5-5): {{pi | number:'3.5-5'}}</p>\n    <br/>\n    <div>\n    <p>Without JSON pipe:</p>\n    <pre>{{object}}</pre>\n    <p>With JSON pipe:</p>\n    <pre>{{object | json}}</pre>\n  </div>\n    "
    })
], TutorialComponent);
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map