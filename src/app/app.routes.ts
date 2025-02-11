import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {ServiceComponent} from './pages/service/service.component'
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
     { path:"home",component:HomeComponent},
     { path:"service",component:ServiceComponent},
     { path:"gallery",component:GalleryComponent},
     { path:"contactus",component:ContactusComponent},
     { path:"product",component:ProductsComponent},


];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutes{

}
export const routingComponent=[
    ServiceComponent
]