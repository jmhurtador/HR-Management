import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.user = firebaseAuth.authState;

    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
      } else {
        this.userDetails = null;
      }
    });
  }

  logIn(email: string, password: string) {
    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password,
    );
    console.log(email + ' ' + password);
    return this.firebaseAuth.auth.signInWithEmailAndPassword(
      email,
      password,
    );
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.firebaseAuth.auth
      .signOut()
      .then((res) => this.router.navigate(['/login']));
  }

  // doRegister(value) {
  //   return new Promise<any>((resolve, reject) => {
  //     this.firebaseAuth
  //       .auth()
  //       .createUserWithEmailAndPassword(value.email, value.password)
  //       .then(
  //         (res) => {
  //           resolve(res);
  //         },
  //         (err) => reject(err),
  //       );
  //   });
  // }
}
