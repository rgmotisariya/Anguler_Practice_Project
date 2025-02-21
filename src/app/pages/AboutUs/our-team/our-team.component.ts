import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'

interface Executive {
  name: string;
  position: string;
  imageUrl: string;
  linkedinUrl: string;
  description: string;
}

@Component({
  selector: 'app-our-team',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})


export class OurTeamComponent {
  executives: Executive[] = [
    {
      name: 'Pranjal Mehta',
      position: 'Managing Director',
      imageUrl: 'https://www.zealousys.com/wp-content/themes/zealous/images/company/our-team/pranjal-mehta.webp',
      linkedinUrl: 'https://www.linkedin.com/in/pranjal-mehta-56b782a/',
      description: 'The captain of the ship who is converting every challenge into business opportunities since 2008.'
    },
    {
      name: 'Raj Kewlani',
      position: 'Mobile Department Head',
      imageUrl: 'https://www.zealousys.com/wp-content/themes/zealous/images/company/our-team/raj-kewlani.webp',
      linkedinUrl: 'https://www.linkedin.com/in/rajkewlani/',
      description: 'Disrupting the world with the help of innovative, intuitive, and futuristic mobile solutions.'
    },
    {
      name: 'Ruchir Shah',
      position: 'Microsoft Department Head',
      imageUrl: 'https://www.zealousys.com/wp-content/themes/zealous/images/company/our-team/ruchir-shah.webp',
      linkedinUrl: 'https://www.linkedin.com/in/ruchirce/',
      description: 'A true applied scientist that architects dreams into profitable and innovative technology solutions.'
    },
    {
      name: 'Sandeep Shah',
      position: 'Open Source Department Head',
      imageUrl: 'https://www.zealousys.com/wp-content/themes/zealous/images/company/our-team/sandeep-shah.webp',
      linkedinUrl: 'https://www.linkedin.com/in/sandip-shah-14a279178/',
      description: 'Illuminating the path of businesses with his in-depth and unbeatable knowledge of LAMP technologies.'
    }
  ];
}
