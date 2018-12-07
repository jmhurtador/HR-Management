import { AuthenticationService } from './../../core/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      email: ['jmhurtador@gmail.com', Validators.required],
      password: ['123456ABC', Validators.required],
    });
  }

  onSubmit(event) {
    console.log(event);
  }

  logIn() {
    this.authService
      .logIn(
        this.form.get('email').value,
        this.form.get('password').value,
      )
      .then((res) => {
        console.log(res);

        this.router.navigate(['home']);
      })
      .catch((err) => console.log('error: ' + err));
  }

  // tryRegister(value) {
  //   this.authService.doRegister(value).then(
  //     (res) => {
  //       console.log(res);
  //       this.errorMessage = '';
  //       this.successMessage = 'Your account has been created';
  //     },
  //     (err) => {
  //       console.log(err);
  //       this.errorMessage = err.message;
  //       this.successMessage = '';
  //     },
  //   );
  // }
  ngOnInit() {}
}
