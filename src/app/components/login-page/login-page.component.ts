import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  public getJsonValues: any;
  public postJsonValues: any;

  ngOnInit() : void
  {
    this.postMethod();
  }

  constructor(private http: HttpClient)
  {

  }

  onSubmit(Form: NgForm) {
    console.log("Form Submitted");
    console.log(Form.value)
    console.log("Email: "+ Form.value.email)
    console.log("Password: "  +Form.value.password)
  }

  forgotEmail() {
    console.log("Forgot email clicked");
  }

  createAccount() {
    console.log("Create account clicked");
  }

  public postMethod()
  {
    let body =
    {
      {
        "user_Email": Form.Values.email,
        "user_Passwords": Form.Values.password
      }
    }
    this.http.post("https://localhost:44347/swagger/index.html/api/User/Login",{}).subscribe;
  }
}
