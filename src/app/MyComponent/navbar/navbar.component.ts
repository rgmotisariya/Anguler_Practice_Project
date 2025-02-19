import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Define the structure of a menu item
interface MenuItem {
  id?: number;
  name: string;
  link?: string;
  subMenu?: MenuItem[]; // Optional submenu (for dropdowns)
}

@Component({
  selector: 'app-navbar',
  standalone: true, 
  imports: [CommonModule,RouterModule, MatMenuModule, MatButtonModule, MatIconModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mobileScreen=false;
  showMobileMenu = false;

  //   menuList = [
  //     { id: 1, name: 'Home', link: '/home' },
  //     { id: 3, name: 'AboutUs', link: '/AboutUs' },
  //     { id: 2, name: 'Product', link: '/product' },
  //     { id: 3, name: 'Service', link: '/service' },
  //     { id: 4, name: 'Gallery', link: '/gallery' },
  //     { id: 5, name: 'Contact Us', link: '/contactus' },
  // ];
  // menuList = [
  //   { id: 1, name: 'Home', link: '/home' },
  //   { id: 2, name: 'About Us', subMenu: [
  //       { name: 'Mission & Vision', link: '/about/mission' },
  //       { name: 'Our Team', link: '/about/team' },
  //       { name: 'Career', link: '/about/career' }
  //   ]},
  //   { id: 3, name: 'Products', subMenu: [
  //       { name: 'Software & Solutions', subMenu: [
  //           { name: 'ERP Software', link: '/products/software/erp' },
  //           { name: 'CRM Software', link: '/products/software/crm' }
  //       ]},
  //       { name: 'Hardware Solutions', subMenu: [
  //           { name: 'IoT Devices', link: '/products/hardware/iot' },
  //           { name: 'Embedded Systems', link: '/products/hardware/embedded' }
  //       ]}
  //   ]},
  //   { id: 4, name: 'Services', subMenu: [
  //       { name: 'Web Development', link: '/services/web' },
  //       { name: 'Mobile App Development', link: '/services/mobile' },
  //       { name: 'IoT Solutions', link: '/services/iot' }
  //   ]},
  //   { id: 5, name: 'Gallery', link: '/gallery' },
  //   { id: 6, name: 'Contact Us', link: '/contactus' }
  // ];

  menuList: MenuItem[] = [
    { id: 1, name: 'Home', link: '/home' },
    { id: 2, name: 'About Us', subMenu: [
        { name: 'Mission & Vision', link: '/about/mission' },
        { name: 'Our Team', link: '/about/team' },
        { name: 'Career', link: '/about/career' }
    ]},
    { id: 3, name: 'Products', subMenu: [
        { name: 'Software & Solutions', subMenu: [
            { name: 'ERP Software', link: '/products/software/erp' },
            { name: 'CRM Software', link: '/products/software/crm' }
        ]},
        { name: 'Hardware Solutions', subMenu: [
            { name: 'IoT Devices', link: '/products/hardware/iot' },
            { name: 'Embedded Systems', link: '/products/hardware/embedded' }
        ]}
    ]},
    { id: 4, name: 'Services', subMenu: [
        { name: 'Web Development', link: '/services/web' },
        { name: 'Mobile App Development', link: '/services/mobile' },
        { name: 'IoT Solutions', link: '/services/iot' }
    ]},
    { id: 5, name: 'Gallery', link: '/gallery' },
    { id: 6, name: 'Contact Us', link: '/contactus' }
  ];

  ngOnInit() {
    window.addEventListener('resize', this.checkScreenSize.bind(this));
    window.addEventListener('scroll', this.closeMobileMenuOnScroll.bind(this)); // Listen for scroll event
    this.checkScreenSize(); // Initial check
  }

  private checkScreenSize() {
    const screenWidth = window.innerWidth;
    this.mobileScreen = screenWidth <= 804;

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
