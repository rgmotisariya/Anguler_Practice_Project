import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private dataUrl = 'data.json';  
  private _url='https://localhost:7045/api/Strudent'

  constructor(private http: HttpClient) {}

  getServices(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
  getStudentData(){
    return this.http.get<any>(this._url);
  }
 
}


