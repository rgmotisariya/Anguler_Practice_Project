import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HomeHeaderComponent } from './HomeComponents/home-header/home-header.component';
import { HomeOurServicesComponent } from './HomeComponents/home-our-services/home-our-services.component';
import { HomeLogoSliderComponent } from './HomeComponents/home-logo-slider/home-logo-slider.component';
import { HomeProductsComponent } from './HomeComponents/home-products/home-products.component';
import { HomeAboutUsComponent } from './HomeComponents/home-about-us/home-about-us.component';
import { HomeClientReviewComponent } from './HomeComponents/home-client-review/home-client-review.component';
import { ContactUsComponent } from '../../MyComponent/contact-us/contact-us.component';
@Component({
  selector: 'app-home',
  imports: [CommonModule,
    HomeHeaderComponent,
    HomeOurServicesComponent,
    HomeLogoSliderComponent,
    HomeProductsComponent,
    HomeAboutUsComponent,
    HomeClientReviewComponent,
    ContactUsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
 
}
