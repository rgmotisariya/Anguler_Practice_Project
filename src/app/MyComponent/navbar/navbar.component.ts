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
    window.addEventListener('scroll', this.closeMobileMenuOnScroll.bind(this)); // Listen for scroll event
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

  @HostListener('window:scroll', [])
  closeMobileMenuOnScroll() {
    if (this.mobileScreen && this.showMobileMenu) {
      this.showMobileMenu = false;
    }
  }
  /** Close mobile menu when a menu item is selected */
  closeMenuOnSelection() {
    if (this.mobileScreen) {
      this.showMobileMenu = false;
    }
  }
  
  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
    window.removeEventListener('scroll', this.closeMobileMenuOnScroll.bind(this));
  }
}
