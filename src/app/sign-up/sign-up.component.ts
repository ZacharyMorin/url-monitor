import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUpUser } from '../shared/sign-up-user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  user: SignUpUser = {
    email: '',
    password: ''
  };

  constructor() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.user);
      // Implement your sign-up logic here
    }
  }
}
