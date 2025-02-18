import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {AppRoutes ,routingComponent} from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@NgModule({
    declarations:[
        
    ],
    imports:[
        BrowserModule,
        AppRoutes,
        FormsModule
    ],
    providers:[],
    bootstrap:[]
})
export class AppModule{

}