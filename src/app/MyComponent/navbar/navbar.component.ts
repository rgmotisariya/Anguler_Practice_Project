import { Component ,HostListener} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, 
  imports: [CommonModule,RouterModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mobileScreen=false;
  showMobileMenu = false;

    menuList = [
      { id: 1, name: 'Home', link: '/home' },
      { id: 2, name: 'Product', link: '/product' },
      { id: 3, name: 'Service', link: '/service' },
      { id: 4, name: 'Gallery', link: '/gallery' },
      { id: 5, name: 'Contact Us', link: '/contactus' },
  ];
  
  ngOnInit() {
    window.addEventListener('resize', this.checkScreenSize.bind(this));
    this.checkScreenSize(); // Initial check
  }
  
  private checkScreenSize() {
    const screenWidth = window.innerWidth;
    this.mobileScreen = screenWidth <= 768;

    if (!this.mobileScreen) {
      this.showMobileMenu = false;
    }
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
