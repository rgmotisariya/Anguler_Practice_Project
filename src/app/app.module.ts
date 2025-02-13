import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {AppRoutes ,routingComponent} from './app.routes';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

@NgModule({
    declarations:[
        
    ],
    imports:[
        BrowserModule,
        AppRoutes,
        SwiperModule
    ],
    providers:[],
    bootstrap:[]
})
export class AppModule{

}