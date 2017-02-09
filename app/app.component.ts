import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hell TEDU Online Angular 2!</h1>
  <h4>App Main Component</h4>
  <my-tutorial></my-tutorial>
  <my-menu>Menu o day</my-menu>
  `,
  styles:['h4 {color:blue;}']
})
export class AppComponent { }
