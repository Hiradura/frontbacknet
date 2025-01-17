import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  private apiUrl = 'http://localhost:3000/data';  // Az API URL

  constructor(private http: HttpClient) { }

  getDatas(): Observable<any[]> {  // Itt a visszatérési típus Observable<any[]>
    return this.http.get<any[]>(this.apiUrl);
  }
}
