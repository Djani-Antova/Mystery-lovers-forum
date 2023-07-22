
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from './types/post';
import { Comment } from './types/comment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) {}
    getPosts() {
      const { appUrl } = environment;  

      return this.http.get<Post[]>(`${appUrl}/posts`)
    }

    getComments(limit?: number) {  
      const { appUrl } = environment;
    //TODO if we want to show only 'number' post
    // const limitFilter = limit ? `?limit=${limit}` : '';
    // return this.http.get(`${appUrl}/comments${limitFilter}`);
      return this.http.get<Comment[]>(`${appUrl}/comments`);
    }
  }



