import {Component} from '@angular/core';
import { FormsModule }   from '@angular/forms';
@Component({
    selector:'my-menu',
    template:`
    <h1>This is my menu</h1>  
    <input type="text" [(ngModel)] = "fname"/>
    <input type="text" [(ngModel)] = "lname"/>
    <br/>
    Full name : {{fname}} {{lname}}
    `,
    styles:[`.redColor{
            color:red;
        }`]
})

export class MenuClassComponent{
    public applyClass = true;
    public blueColor = false;
    OnClick(value){
        console.log(value);
    }
}