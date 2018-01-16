
// imports general module code from the Angular framework core
import { NgModule }      from '@angular/core';
//imports code to run app in browser (directives)
import { BrowserModule } from '@angular/platform-browser';
//imports the component we created
import { AppComponent }   from './app.component';



@NgModule({ //decorator containing code for a module
  imports: [ BrowserModule ], //pieces of application we want in this module
  declarations: [ AppComponent ], //components in this module
  bootstrap: [ AppComponent ] //components required at launch
})


export class AppModule{} //standard name for root module's class declaration
