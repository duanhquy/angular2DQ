import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <h1>Hell Online Angular 2 with {{title | uppercase}}!</h1>    
  <my-tutorial></my-tutorial>  
  `
})
export class AppComponent { 

  public title = "DAQ  Education Chanel";
  
}
