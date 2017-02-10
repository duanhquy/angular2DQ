import {Component} from '@angular/core';
import { FormsModule }   from '@angular/forms';
@Component({
    selector:'my-menu',
    template:`
    <h1>This is my menu</h1>  
    <h3 *ngIf="showLineIf">This is ngIf directive for</h3>
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'">This is Red color</p>
        <p *ngSwitchCase="'yellow'">This is Yellow color</p>
        <p *ngSwitchCase="'blue'">This is Blue color</p>        
        <p *ngSwitchDefault>Invalid color</p>    
    </div>

    <ul>
        <li *ngFor="let color of colors">{{color}}</li>
    </ul>
    `   
})

export class MenuClassComponent{
   public showLineIf = true;
   public color = "red";
   public colors = ["Red","Green","Blue"];
}