import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {NavbarComponent} from './MyComponent/navbar/navbar.component'
import {AppRoutes ,routingComponent} from './app.routes';

import { AppComponent } from "./app.component";

@NgModule({
    declarations:[
       
        routingComponent
    ],
    imports:[
        BrowserModule,
        AppRoutes
    ],
    providers:[],
})
export class AppModule{

}