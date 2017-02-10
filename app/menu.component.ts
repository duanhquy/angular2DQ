import {Component} from '@angular/core';

@Component({
    selector:'my-menu',
    template:`
    <h1>This is my menu</h1>  
    <button (click)="OnClick(name.value)">Click Me</button>
    <input #name type="text"/>
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