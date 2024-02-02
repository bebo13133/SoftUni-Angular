import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getThemes() {
    const {appUrl} = environment
    return this.http.get(`${appUrl}/themes`)
  }
  getPosts(limit?: number) {
    const {appUrl} = environment
    const limitFilter = limit ? `?limit=${limit}` :'';
    return this.http.get(`${appUrl}/posts`)

  }
}
