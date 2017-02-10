import {Component} from '@angular/core';

@Component({
    selector:'my-menu',
    template:`
    <h1>This is my menu</h1>
    <h3 [class.redColor]="applyClass">Apply Class</h3>
    <h4 [style.color]="blueColor?'blue':'orange'">Apply Style</h4>
    `,
    styles:[`.redColor{
            color:red;
        }`]
})

export class MenuClassComponent{
    public applyClass = true;
    public blueColor = false;

}