import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-http-forbidden',
  templateUrl: './http-forbidden.component.html',
  styleUrls: ['./http-forbidden.component.scss'],
})
export class HttpForbiddenComponent implements OnInit {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }

  ngOnInit() {}
}
