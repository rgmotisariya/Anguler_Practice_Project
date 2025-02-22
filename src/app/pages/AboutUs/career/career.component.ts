import { Component } from '@angular/core';
import { CommonModule} from '@angular/common'
@Component({
  standalone:true,
  selector: 'app-career',
  imports: [CommonModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  imageSrc: string = "https://www.zealousys.com/wp-content/themes/zealous/images/company/career-great-place.webp";

  leftItems: string[] = [
    "Freedom To Make Decisions & Manage Your Time",
    "Wonderful Collaborators, Friends, and Like-minded Coworkers",
    "Individuals Are Empowered To Grow",
    "A Variety Of Opportunity For Leadership, Both Large & Small."
  ];

  rightItems: string[] = [
    "Provided Some of the Top Benefits & Perks on the Market",
    "Opportunity To Find The Ideal Work-Life Balance",
    "Great Cultures Begin with a Passionate Advocate's Vision",
    "A Culture of Continuous Improvement"
  ];

  positions = [
    {
      title: "Marketing Executive",
      experience: "1-2 Years",
      imageUrl: "https://www.zealousys.com/wp-content/uploads/2025/01/Marketing-Executive.png",
      applyLink: "https://www.zealousys.com/career/marketing-executive/"
    },
    {
      title: "Business Development Executive",
      experience: "1 to 3 Years",
      imageUrl: "https://www.zealousys.com/wp-content/uploads/2018/12/career-bde.png",
      applyLink: "https://www.zealousys.com/career/business-development-executive/"
    },
    {
      title: "Content Writer",
      experience: "1-2 Years",
      imageUrl: "https://www.zealousys.com/wp-content/uploads/2024/02/content-writer.png",
      applyLink: "https://www.zealousys.com/career/content-writer/"
    }
  ];
}
