import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {ServiceComponent} from './pages/service/service.component'
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ProductsComponent } from './pages/products/products.component';
import { MissionAndVisionComponent} from './pages/AboutUs/mission-and-vision/mission-and-vision.component';
import { OurTeamComponent} from './pages/AboutUs/our-team/our-team.component';
import { CareerComponent} from './pages/AboutUs/career/career.component';
import { JDComponent} from './pages/AboutUs/career/JDcomponents/jd/jd.component'

import { AMCSComponent} from './pages/software-and-solutions/amcs/amcs.component'
import { DairyERPComponent} from './pages/software-and-solutions/dairy-erp/dairy-erp.component'
import { POSComponent} from './pages/software-and-solutions/pos/pos.component'
import { RTOMSComponent} from './pages/software-and-solutions/rtoms/rtoms.component'
import { SDMSComponent} from './pages/software-and-solutions/sdms/sdms.component'
import { SMPSComponent} from './pages/software-and-solutions/smps/smps.component'

export const routes: Routes = [
     { path:"home",component:HomeComponent},
     { path:"service",component:ServiceComponent},
     { path:"gallery",component:GalleryComponent},
     { path:"contactus",component:ContactusComponent},
     { path:"product",component:ProductsComponent},
     { path:"about/mission",component:MissionAndVisionComponent},
     { path:"about/team",component:OurTeamComponent},
     { path:"about/career",component:CareerComponent},
     { path:"career/:id",component:JDComponent},

     { path:"products/software/AMCS",component:AMCSComponent},
     { path:"products/software/Dairy-ERP",component:DairyERPComponent},
     { path:"products/software/POS",component:POSComponent},
     { path:"products/software/RTOMS",component:RTOMSComponent},
     { path:"products/software/SDMS",component:SDMSComponent},
     { path:"products/software/SMPS",component:SMPSComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutes{

}
