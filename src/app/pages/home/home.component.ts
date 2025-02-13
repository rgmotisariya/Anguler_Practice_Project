import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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

  services = [
    {
      title: 'Startups',
      description: 'We deliver affordable, scalable tech solutions to support rapid startup growth and market readiness.',
      image: 'assets/images/startup.png'
    },
    {
      title: 'B2B',
      description: 'Our solutions empower businesses with advanced technologies that improve processes, productivity, and performance.',
      image: 'assets/images/b2b.png'
    }]
}
