import {Component} from '@angular/core';
import { FormsModule }   from '@angular/forms';
@Component({
    selector:'my-menu',
    template:`
    <h1>This is my menu</h1>    
    <p [ngClass] = "{classOne:cone,classTwo:ctwo}">This ngClass apply style</p>
    <button (click)="ToggleColor()">Thay doi mau sac</button>
    <p [ngStyle]="{'font-style':style,'font-size':size}">fskfslfhlfhsfhfa;</p>
    `   ,
    styles:[
        `
            .classOne{
                color:black;       
            }
            .classTwo{
                background-color:red;     
            }
        `
    ]
})

export class MenuClassComponent{  
    public cone  = true;
    public ctwo = true;
    public style = 'italic';
    public size = "30px";
    ToggleColor(){
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }
}