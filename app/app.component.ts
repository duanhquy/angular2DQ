import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent { 

  public title = "DAQ  Education Chanel";
  
  onSubmit(value:any){
    console.log(value);
  }
}
