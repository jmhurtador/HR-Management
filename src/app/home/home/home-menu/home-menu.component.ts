import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
})
export class HomeMenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToEmployees() {
    this.router.navigate(['employees']);
  }

  goToProjects() {
    this.router.navigate(['projects']);
  }
}
