import { Component,ViewChild } from '@angular/core';
import {TutorialComponent} from './tutorial.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hell Online Angular 2 with {{title}}!</h1>
  <input type="text" #txtName (keyup) = "0"/>
  <br/>
   <p>Số lượt đồng ý: {{agree}} - Số không đồng ý {{disgree}}</p>
   <button (click) = "changeName()">Đổi tên</button>
  <my-tutorial *ngFor="let em of arrPerson" [name] = "em" (onVote) = "parentVote($event)"></my-tutorial>  
  `
})
export class AppComponent { 

  public agree:number  = 0;
  public disgree:number  = 0;
  public arrPerson = ["Công Phượng","Tuấn Anh","Xuân Trường","Văn Toàn"];

  parentVote(agree:boolean){
    if(agree) this.agree ++;
    else
      this.disgree ++;
  }

  @ViewChild(TutorialComponent)
  private turtorial: TutorialComponent;

  changeName(){
    this.turtorial.setName("Change name is Parent");
  }
}
