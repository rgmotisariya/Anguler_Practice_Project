import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-client-review',
  imports: [CommonModule],
  templateUrl: './home-client-review.component.html',
  styleUrl: './home-client-review.component.css'
})
export class HomeClientReviewComponent {
  @ViewChild('reviews', { static: false }) reviewsContainer!: ElementRef;
 
  backgroundImage = '/assets/images/client-testinomial-back-image.png';

  testimonials = [
    {
      companyName: 'Patna Dairy Project',
      position: 'MD',
      review: 'Samudra Technologies is a company with true ingenuity and insight. They have always kept listening to our pain areas/bottlenecks and suggested the right solution to us. They have also been a good team player and provided us with support as and when needed. I would definitely recommend SMPS to whoever seeks continuous improvement for their organization.',
      logo: 'public/company1.jpg'
    },
    {
      companyName: 'Panchamrut Dairy(The Panchmahal District Co.operative Milk Producers Union Ltd)',
      position: 'GM',
      review: 'Samudra Technologies is a company that embodies the journey of innovation with anyone who is looking for intelligent solutions for the area of improved opportunities. I have the privilege of working firsthand with the Samudra team and realized most of our vision when most of it was impossible at first. We have discovered and made many "first" within the organization, probably even in the industry where we operate from. There have been many notable achievements that were envisioned and made work by SMPS. I hope this note speaks for itself as a testament to the good effort presented by Samudra Team consistently.',
      logo: 'public/company1.jpg'
    },
    {
      companyName: 'Morgan Milk & Dairy Industries Pvt Ltd.',
      position: 'CMD',
      review: 'Samudra Technologies has outstanding business knowledge, I was very pleased with their knowledge and in-depth understanding of what it takes for milk procurement, milk process, and milk marketing division concern to manage the operations. The managements knowledge, natural instincts for business, and the ability to put complex transnational business concepts into succinct and easy-to-understand terms were a great service to us.',
      logo: 'public/company1.jpg'
    },
    {
      companyName: 'Bihar State Milk Co-Operative Federation Ltd.',
      position: 'AGM',
      review: 'We believe that Samudra Technologies met and went far beyond our expectations, not only from the standpoint of features and functionality but also a high level of customized services. Samudra Tech has been servicing us for nearly two years now, and our tools keep getting better and more precise every year.',
      logo: 'public/company1.jpg'
    },
    {
      companyName: 'SHREE MORBI DISTRICT MAHILA MILK PRODUCERS CO. OP. UNION LIMITED',
      position: 'MD',
      review: 'Samudra Technologiess RTOMS, SMPS deployment was done with care and was delivered on time. They are real professionals, and we could see that with the way they managed the entire deployment and support. The team has excellent functional and technical knowledge of Dairy reporting and we are very happy with the outcome. We look forward to working together with them again for more Milk management solutions.',
      logo: 'public/company1.jpg'
    }
  ];

  

  scrollLeft() {
    this.reviewsContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.reviewsContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
