
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) {}
    getPosts() {
      const { appUrl } = environment;  

      return this.http.get(`${appUrl}/posts`)
    }

    // getComments() {
    //   const { appUrl } = environment;
    //   // const limitFilter = limit ? `?limit=${limit}` : '';

    //   return this.http.get(`${appUrl}/comments`)
    // }

    getComments(limit?: number) {
      const { appUrl } = environment;
      const limitFilter = limit ? `?limit=${limit}` : '';

      return this.http.get(`${appUrl}/comments${limitFilter}`)
    }
  }



