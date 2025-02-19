import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {AppRoutes ,routingComponent} from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations:[
        
    ],
    imports:[
        BrowserModule,
        AppRoutes,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule
    ],
    providers:[],
    bootstrap:[]
})
export class AppModule{

}