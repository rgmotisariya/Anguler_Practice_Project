import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  services = [
    {
      title: 'Web Development',
      description: `Our meticulous approach to creating web applications places us among the top web application development services. 
      
      We have developed numerous web applications by thoroughly understanding and addressing our clients' requirements. 
      
      We provide web application development services that elevate your web solutions to a superior level. Our team of professional developers and designers is dedicated to building growth-driven web applications. 

      You can be assured of receiving highly secure and responsive web solutions at competitive prices from our renowned web development company in India.`, 
      image: '01-Services.png'
    },
    {
      title: 'Mobile App Development',
      description: `We design, develop, and implement mobile and tablet applications for Android, transforming your app ideas into reality and turning them into revenue-generating assets for your business. 

      Our advanced and innovative Android app development solutions are tailored to meet all your business needs.`,
      image: '02-Services.png'
    },
    {
      title: 'IOT Development',
      description: `Transforming the World with Internet of Things (IOT) Solutions.
      
      The Internet of Things (IOT) represents a groundbreaking dimension of technology that bridges the gap between the physical and digital worlds. 

      This transformation is driven by the development of IOT. Samudra Technologies, a leading provider of IOT solutions, is making a significant impact with its IOT-based solutions across various sectors and industries—from retail and logistics to energy efficiency and real-time healthcare support.`,
      image: '03-Services.png'
    }
  ];
}
