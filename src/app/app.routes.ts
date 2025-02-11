import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
// import {ServiceComponent} from './pages/service/service.component'

export const routes: Routes = [
    // { path:"services",component:ServiceComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutes{

}
export const routingComponent=[
  
]