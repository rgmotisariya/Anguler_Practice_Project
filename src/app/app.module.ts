import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {AppRoutes ,routingComponent} from './app.routes';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations:[
        
    ],
    imports:[
        BrowserModule,
        AppRoutes
    ],
    providers:[],
    bootstrap:[]
})
export class AppModule{

}