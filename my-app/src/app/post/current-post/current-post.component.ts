import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})
export class CurrentPostComponent implements OnInit{

  post: Post | undefined;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.fetchPost()
  }

  fetchPost(): void {
      const id = this.activatedRoute.snapshot.params['postId']
      this.apiService.getPost(id).subscribe((post) => {
        this.post = post;
        console.log(post);
        
      }) 
  }


}
