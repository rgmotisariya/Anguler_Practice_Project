import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-contactus',
  imports: [FormsModule, CommonModule,MatIconModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})  
export class ContactusComponent {
  user = {
    fullName: '',
    phone: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      console.log('Form Submitted:', this.user);
    }
  }
}
