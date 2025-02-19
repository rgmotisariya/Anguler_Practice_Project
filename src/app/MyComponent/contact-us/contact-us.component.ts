import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-contact-us',
  imports: [
    FormsModule,
    CommonModule
 
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  //------------------TDF code start------------------------
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
   //------------------TDF code end------------------------

  //-------------------Reactive form code Start-------------
  //  contactForm!: FormGroup;
  //  constructor(private fb: FormBuilder) {}

  // contactForm = new FormGroup({ 
  //   fullName: new FormControl(''),
  //   phone:new FormControl(''),
  //   email:new FormControl(''),
  //   message:new FormControl(''),
  // });

  //  ngOnInit() {
  //    this.contactForm = this.fb.group({
  //      fullName: ['', [Validators.required, Validators.minLength(3)]],
  //      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  //      email: ['', [Validators.required, Validators.email]],
  //      message: ['', [Validators.required, Validators.minLength(10)]],
  //      fileUpload: [null]
  //    });
  //  }
    //-------------------Reactive form code end-------------


}
 