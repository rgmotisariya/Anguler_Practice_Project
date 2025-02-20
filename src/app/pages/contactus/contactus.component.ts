import { Component } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  standalone:true,
  imports: [FormsModule, CommonModule,MatIconModule,ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})  
export class ContactusComponent {
  //-----------------TDF---------------------
  // user = {
  //   fullName: '',
  //   phone: '',
  //   email: '',
  //   message: ''
  // };

  // submitted = false;

  // onSubmit(form: any) {
  //   if (form.valid) {
  //     this.submitted = true;
  //     console.log('Form Submitted:', this.user);
  //   }
  // }

//---------------------Reactive Form------------

contactForm!: FormGroup;

 constructor(private fb: FormBuilder) {}

 ngOnInit() {
   this.contactForm = this.fb.group({
     fullName: ['', [Validators.required, Validators.minLength(3)]],
     phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
     email: ['', [Validators.required, Validators.email]],
     message: ['', [Validators.required, Validators.minLength(10)]],
     fileUpload: [null]
   });
 }

 onFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input?.files && input.files.length > 0) {
    this.contactForm.patchValue({ fileUpload: input.files[0] });
  }
}
 onSubmit() {
   if (this.contactForm.valid) {
     console.log('Form Submitted:', this.contactForm.value);
   }
 }
}
