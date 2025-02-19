import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-our-services',
  templateUrl: './home-our-services.component.html',
  imports:[CommonModule],
  styleUrls: ['./home-our-services.component.css']
})
export class HomeOurServicesComponent {
  public activeService: any;
  
  services = [
    {
      title: 'Web Development',
      description: 'Our meticulous approach to creating web applications places us among the top web application development services. We have developed numerous web applications by thoroughly understanding and addressing our clients\' requirements.',
      image: '01-Services.png'
    },
    {
      title: 'Mobile App Development',
      description: 'We specialize in building high-performance mobile apps tailored to your business needs. From Android to iOS, our solutions ensure smooth and efficient user experiences.',
      image: '02-Services.png'
    },
    {
      title: 'IoT Development',
      description: 'Our IoT solutions enable businesses to leverage smart devices, automation, and connectivity for enhanced efficiency and innovation.',
      image: '03-Services.png'
    }
  ];

  constructor() {
    // Set the first service as the default active service
    this.activeService = this.services[0];
  }

  setActiveService(service: any) {
    this.activeService = service;
  }
}
