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

  

    menuList: MenuItem[] = [
      { id: 1, name: 'Home', link: '/home' },
      { id: 2, name: 'About Us', subMenu: [
          { name: 'Mission & Vision', link: '/about/mission' },
          { name: 'Our Team', link: '/about/team' },
          { name: 'Career', link: '/about/career' }
      ]},
      { id: 3, name: 'Products', subMenu: [
          { name: 'Software & Solutions', subMenu: [
              { name: ' RTOMS', link: '/products/software/RTOMS' },
              { name: 'Software AMCS', link: '/products/software/AMCS' },
              { name: 'SMPS', link: '/products/software/SMPS' },
              { name: 'Dairy ERP', link: '/products/software/Dairy-ERP' },
              { name: 'SDMS', link: '/products/software/SDMS' },
              { name: 'Software POS', link: '/products/software/POS' }
          ]},
        
          { name: 'Hardware Solutions', subMenu: [
              { name: 'IoT Devices', link: '/products/hardware/iot' },
              { name: 'Embedded Systems', link: '/products/hardware/embedded' }
          ]}
      ]},
      { id: 4, name: 'Services', link: '/service' },
      { id: 5, name: 'Gallery', link: '/gallery' },
      { id: 6, name: 'Contact Us', link: '/contactus' }
    ];

    ngOnInit() {
      window.addEventListener('resize', this.checkScreenSize.bind(this));
      window.addEventListener('scroll', this.closeMobileMenuOnScroll.bind(this)); 
      this.checkScreenSize(); // Initial check
    }

    private checkScreenSize() {
      const screenWidth = window.innerWidth;
      this.mobileScreen = screenWidth <= 804;

      if (!this.mobileScreen) {
        this.showMobileMenu = false;
      }
    }


    @HostListener('window:scroll', [])
    closeMobileMenuOnScroll() {
      if (this.mobileScreen && this.showMobileMenu) {
        this.showMobileMenu = false;
      }
    }
    
    
    ngOnDestroy() {
      window.removeEventListener('resize', this.checkScreenSize.bind(this));
      window.removeEventListener('scroll', this.closeMobileMenuOnScroll.bind(this));
    }
  }
