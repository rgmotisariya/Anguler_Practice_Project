import { CommonModule } from '@angular/common';
import { Component, AfterViewInit,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../../shared/Services/dataservice.service';


@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})  
export class ServiceComponent implements OnInit {

  public services: any[] = [];
  public student: any[] = [];

  constructor(private route: ActivatedRoute, private dataserviceService: DataserviceService) {}

  ngOnInit() {
    this.dataserviceService.getServices().subscribe((data) => {
      this.services = data.services; 
      // console.log( this.services);
    });

    this.dataserviceService.getStudentData().subscribe((data) => {
      this.student=data;
      console.log(this.student);
    })
  }
      

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100); 
      }
    });
  }

//   services = [ 
//     {
//       title: 'Web Development',
//       description: `Our meticulous approach to creating web applications places us among the top web application development services. We have developed numerous web applications by thoroughly understanding and addressing our clients' requirements.

// We provide web application development services that elevate your web solutions to a superior level. Our team of professional developers and designers is dedicated to building growth-driven web applications. Our expertise includes developing enterprise portals, e-commerce platforms, custom web applications, large-scale websites, web tools, and SaaS solutions that meet both your business and end-user needs.

// You can be assured of receiving highly secure and responsive web solutions at competitive prices from our renowned web development company in India.

// If you need a web app that loads quickly, we can deliver exactly that. We specialize in building fast-loading web apps that enhance your conversions.`, 
//       image: '01-Services.png',
     
//     },
//     {
//       title: 'Mobile App Development',
//       description: `We design, develop, and implement mobile and tablet applications for Android, transforming your app ideas into reality and turning them into revenue-generating assets for your business.

// Our advanced and innovative Android app development solutions are tailored to meet all your business needs. Our team at AdSense Networks is skilled and experienced in creating high-quality, feature-rich apps across various sectors, including healthcare, travel, education, retail, media, and entertainment.

// We provide efficient, professional, and cost-effective Android app development services to boost your business and increase your profits. If you’re seeking Android mobile app development crafted to perfection at a fair price, we deliver. Based on your requirements, we develop standalone, client-server, web-service-driven, or data-driven mobile apps. We assess your project’s scope and provide a solution that best aligns with your market and business needs.`,
//       image: '02-Services.png',
    
//     },
//     {
//       title: 'IOT Development',
//       description: `Transforming the World with Internet of Things (IOT) Solutions.

// The Internet of Things (IOT) represents a groundbreaking dimension of technology that bridges the gap between the physical and digital worlds. This transformation is driven by the development of IOT. Samudra Technologies, a leading provider of IOT solutions, is making a significant impact with its IOT-based solutions across various sectors and industries—from retail and logistics to energy efficiency and real-time healthcare support.`,
//       image: '03-Services.png',
    
//     }
//   ];
}
