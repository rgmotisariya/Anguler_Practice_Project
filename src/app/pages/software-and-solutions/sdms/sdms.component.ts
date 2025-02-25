import { Component } from '@angular/core';

@Component({
  selector: 'app-sdms',
  imports: [],
  templateUrl: './sdms.component.html',
  styleUrl: './sdms.component.css'
})
export class SDMSComponent {
  downloadBrochure() {
    const link = document.createElement('a');
    link.href = 'public\SDMS.pdf'; // Update with the correct path
    link.download = 'SDMS-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
