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
      title: 'AMCS',
      description: 'High-quality fresh milk from the best farms.',
      imageUrl: '02-AMCS.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'POS',
      description: 'Delicious and organic cheese for all your needs.',
      imageUrl: '02-Software-POS.png',
      link: '#'
    },
    {
      id: 3,
      title: 'ERP',
      description: 'Rich and creamy yogurt with natural flavors.',
      imageUrl: 'ERP-1.png',
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
