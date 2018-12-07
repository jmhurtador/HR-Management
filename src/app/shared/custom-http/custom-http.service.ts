import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  post(url: string, body: any) {
    return this.httpClient.post(url, body);
  }
}
