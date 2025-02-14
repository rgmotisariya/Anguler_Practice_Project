import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-logo-slider',
  imports: [CommonModule],
  templateUrl: './home-logo-slider.component.html',
  styleUrl: './home-logo-slider.component.css'
})
export class HomeLogoSliderComponent {
 
  logos: string[] = [
    'saamarthya.png',
    'nandini.png',
    'mayur_dairy.png',
    'nddb_dairy_services.png','saamarthya.png',
    'nandini.png',
    'mayur_dairy.png',

    'nddb_dairy_services.png',
    'saamarthya.png',
    'nandini.png',
    'mayur_dairy.png',

    'nddb_dairy_services.png',
    'saamarthya.png',
    'nandini.png',
    'mayur_dairy.png',

    'nddb_dairy_services.png'
  ];

}
