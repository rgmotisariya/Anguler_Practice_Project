import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private dataUrl = 'data.json'; 

  constructor(private http: HttpClient) {}

  getServices(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
 
}


