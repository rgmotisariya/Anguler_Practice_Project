import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonModule} from '@angular/common'
import { CareerService } from './../../../../../shared/career.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-jd',
  imports: [CommonModule,MatIconModule],
  templateUrl: './jd.component.html',
  styleUrl: './jd.component.css'
})
export class JDComponent {
  job: any;

  constructor(private route: ActivatedRoute, private careerService: CareerService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const jobTitle = params.get('id');
      if (jobTitle) {
        this.job = this.careerService.getJobByTitle(jobTitle);
      } 
    });
  }
}
