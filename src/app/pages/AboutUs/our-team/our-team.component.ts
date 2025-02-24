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
      name: 'Mr. Pankaj Barot',
      position: 'FOUNDER',
      imageUrl: '01-team-member.jpg',
      linkedinUrl: '01-team-member.jpg',
      description: 'The captain of the ship who is converting every challenge into business opportunities since 2008.'
    },
    {
      name: 'Mr. Paresh Barot',
      position: 'CEO',
      imageUrl:  '02-team-member.jpg',
      linkedinUrl: '02-team-member.jpg',
      description: 'Disrupting the world with the help of innovative, intuitive, and futuristic mobile solutions.'
    },
    {
      name: 'Mr. Parth Barot',
      position: 'TEAM LEAD (IT)',
      imageUrl:  '03-team-member.jpg',
      linkedinUrl: '03-team-member.jpg',
      description: 'A true applied scientist that architects dreams into profitable and innovative technology solutions.'
    },
    {
      name: 'Mr. Pravin Parmar',
      position: 'IN CHARGE HARDWARE',
      imageUrl: '04-team-member.jpg',
      linkedinUrl: '04-team-member.jpg',
      description: 'Illuminating the path of businesses with his in-depth and unbeatable knowledge of LAMP technologies.'
    }, {
      name: 'Mrs. Madhvi Rao',
      position: 'BUSINESS ANALYST',
      imageUrl:  '05-team-member.jpg',
      linkedinUrl: '05-team-member.jpg',
      description: 'Illuminating the path of businesses with his in-depth and unbeatable knowledge of LAMP technologies.'
    }
  ];
}
