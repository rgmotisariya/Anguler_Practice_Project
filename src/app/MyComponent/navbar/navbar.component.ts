import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuList = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Product', link: '/Product' },
    { id: 2, name: 'Service', link: '/Service' },
    { id: 2, name: 'Service', link: '/Service' },
    { id: 3, name: 'Gallery', link: '/Gallery' },
    { id: 4, name: 'Contact Us', link: '/contactus' },
  ];
}
