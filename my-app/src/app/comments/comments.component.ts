import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Comment } from '../types/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  commentList: Comment[] = [];
  // thereAreNoComments: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
    this.apiService.getComments().subscribe({
      next: (comments) => {
      this.commentList = comments;
      // this.commentList = [];

      // if(this.commentList.length = 0) {
      //   this.thereAreNoComments = true
      // }
    },
    error: (err) => {
      console.error(`Error: ${err}`);
    },
   });
  }
}
