import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent {
  products = [
    {
      id: 1,
      Header:'Real Time Order Management System',
      title: 'AMCS',
      description: 'PC Based Automatic Milk Collection System is simply know to be white revolution',
      imageUrl: '02-AMCS.jpg',
      link: '#'
    },
    {
      id: 2,
      Header:'Real Time Order Management System',
      title: 'POS',
      description: 'Software that simplifies the way you do billing at your point of sale (POS). Instantly record sale',
      imageUrl: '02-Software-POS.png',
      link: '#'
    },
    {
      id: 3,
      Header:'Real Time Order Management System',
      title: 'ERP',
      description: 'We also provide custom-designed ERP Solutions tailored according to the precise requirements of the clients.',
      imageUrl: 'ERP-1.png',
      link: '#'
    },
    {
      id: 4,
      Header:'Real Time Order Management System',
      title: '  RTMOS',
      description: 'RTOMS stands of Real Time Order Management system where user can place order online.',
      imageUrl: 'RTMOS.jpg',
      link: '#'
    },
    {
      id: 5,
      Header:'Real Time Order Management System',
      title: 'SMPS',
      description: 'SMSP is Android Operating System based Milk Procurement System is specially',
      imageUrl: 'SMPS-02-1.jpg',
      link: '#'
    },
    {
      id: 6,
      Header:'Real Time Order Management System',
      title: 'SDMS',
      description: 'It’s a unique all in one dairy management solution start from procurement to the production',
      imageUrl: 'SDMS-02-1.jpg',
      link: '#'
    }
 
  ];

  currentIndex = 0;
  isFadingOut = false;

  constructor() {
    this.startImageRotation();
  }

  startImageRotation() {
    setInterval(() => {
      this.isFadingOut = true; // Start fade-out animation
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.products.length;
        this.isFadingOut = false; // Start fade-in animation
      }, 800); // Delay to match fade-out transition
    }, 3000); // Change every 3 seconds
  }
}
