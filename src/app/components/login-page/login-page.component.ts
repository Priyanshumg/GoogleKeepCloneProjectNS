import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  onSubmit(Form: NgForm) {
    console.log("Form Submitted");
    console.log(Form.value)
    console.log(Form.value.email)
    console.log(Form.value.password)
  }

  forgotEmail() {
    console.log("Forgot email clicked");
  }

  createAccount() {
    console.log("Create account clicked");
  }
}
