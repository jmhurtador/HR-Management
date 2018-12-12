import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-http-not-found',
  templateUrl: './http-not-found.component.html',
  styleUrls: ['./http-not-found.component.scss'],
})
export class HttpNotFoundComponent implements OnInit {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }

  ngOnInit() {}
}
