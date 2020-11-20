import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) {
  }

  getData(page:Number): Observable<any> {
    //const url = "https://randomuser.me/api/?results=70";
    const url = `http://localhost:3000/listall?page=${page}&per_page=10&seller_id=1`;
    return this.http.get<any>(url)
  }
}
