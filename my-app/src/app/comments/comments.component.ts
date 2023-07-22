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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
    this.apiService.getComments().subscribe(comments => {
      console.log(comments[0]);
      this.commentList = comments;
    });
  }
}

// export class CommentsComponent {
//   // Sample static data for demonstration
//   x: any = {
//     post: {
//       postTitle: "Sample Post Title",
//       postDescription: "This is a sample post description."
//     },
//     author: {
//       name: "John Doe",
//       photo: "path-to-user-photo"
//     }
//   };

//   // Static user display name
//   staticUserName: string = "Jane Smith";

//   commentText: string = "";

//   handleChange(event: Event) {
//     // Handle text area change if needed
//   }

//   handleSubmit() {
//     // Handle form submission if needed
//   }
// }