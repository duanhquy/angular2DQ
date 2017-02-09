import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {TutorialComponent} from './tutorial.component';
import {MenuClassComponent} from './menu.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,TutorialComponent,MenuClassComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
