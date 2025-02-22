import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ContactUsComponent {
 
//------------------TDF------------------------
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



//-------------------Reactive form-------------
 
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
 