import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.signup(form.value)
      .subscribe(
        responce => console.log(responce),
        error => console.log(error)
      );
  }

}