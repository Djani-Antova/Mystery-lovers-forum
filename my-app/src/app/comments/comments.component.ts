import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    //TODO check if the API server supports Confirm that the API server supports the limit query parameter and that it properly limits the number of comments returned. You may need to check the API documentation or server-side code to ensure the correct usage of the limit parameter.
    const limit = 5 // Set the desired limit for comments
    this.apiService.getComments().subscribe(comments => {
    console.log(comments);
   });
  }
}
