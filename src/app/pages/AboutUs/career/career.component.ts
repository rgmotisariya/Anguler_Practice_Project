import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {CareerService} from './../../../shared/career.service'
@Component({
  standalone:true,
  selector: 'app-career',
  imports: [CommonModule,RouterModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {

  positions: any[] = []; 

  constructor(private careerService: CareerService) {}

  ngOnInit() {
    this.positions = this.careerService.getAllJobs();
  }
}
