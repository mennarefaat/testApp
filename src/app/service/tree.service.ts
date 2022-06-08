import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from '../models/data';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  baseurl: string = 'http://localhost:8080/data/';

  getAllEvents() {
    return this.http.get<data[]>(this.baseurl);
  }

  postData(newData: data) {
    return this.http.post(this.baseurl, newData);
  }

  constructor(private http: HttpClient) {}
}
