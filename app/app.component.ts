import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hell Online Angular 2 with {{title}}!</h1>
  <my-menu></my-menu>
  <img [src]="image"/>
  <input type="text" [value] = "welcomText"/>
  `,
  styles:['h4 {color:blue;}']
})
export class AppComponent { 
  public title = "Master .NET";
  //property binding

  public image = "http://lorempixel.com/300/300";
  public welcomText = "Hoc de phat trien ban than!";
}
