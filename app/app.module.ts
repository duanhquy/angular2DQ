import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {TutorialComponent} from './tutorial.component';
import {MenuClassComponent} from './menu.component';


@NgModule({
  imports:      [ BrowserModule,FormsModule  ],
  declarations: [ AppComponent,TutorialComponent,MenuClassComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
