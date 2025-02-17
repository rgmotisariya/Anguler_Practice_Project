import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {
  slides = [
    {
      background: "#b0ffad",
      title: "SMPS",
      subtitle: "Go Smart",
      link: "/services/iot-app-development",
      linkText: "Learn more",
      circleImage: "supply_chain_stage_1.png"
    },
    {
      background: "#E8F4FF",
      title: "RMRD",
      subtitle: "Go Mobile",
      link: "/services/mobile-app-development",
      linkText: "Learn more",
      circleImage: "/supply_chain_stage_2.png"
    },
    {
      background: "rgb(229 229 245 / 58%)",
      title: "SDMS",
      subtitle: "Digitally",
      link: "/services/web-app-development",
      linkText: "Learn more",
      circleImage: "supply_chain_stage_3.png"
    },
    {
      background: "#ffd2ad",
      title: "RTOMS",
      subtitle: "Go Smart",
      link: "/services/iot-app-development",
      linkText: "Learn more",
      circleImage: "supply_chain_stage_4.png"
    },
    {
      background: "#feffad",
      title: "POS",
      subtitle: "Go Smart",
      link: "/services/iot-app-development",
      linkText: "Learn more",
      circleImage: "supply_chain_stage_5.png"
    }
  ];

  currentSlideIndex = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Auto-slide every 5 seconds
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  get carouselTransform(): string {
    return `translateX(-${this.currentSlideIndex * 100}%)`; // Apply translateX to move the slides
  }
}
