import { AuthenticationService } from './../../../core/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss'],
})
export class VerticalMenuComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {}

  ngOnInit() {}

  logOut() {
    this.authService.logout();
  }

  goToEmployees() {
    this.router.navigate(['employees']);
  }

  goToProjects() {
    this.router.navigate(['projects']);
  }
}
