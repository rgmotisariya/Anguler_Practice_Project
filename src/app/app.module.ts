import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {AppRoutes} from './app.routes';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        
    ],
    imports:[
        BrowserModule,
        AppRoutes,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        RouterModule
    ],
    providers:[],
    bootstrap:[]
})
export class AppModule{

}