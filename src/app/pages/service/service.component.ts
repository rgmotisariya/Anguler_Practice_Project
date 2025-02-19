import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-service',
  imports: [CommonModule], 
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  services: string[] = ['Web Development', 
    'Mobile App Development', 'Cloud Integration', 'UI/UX Design', 'Digital Marketing'];
}
