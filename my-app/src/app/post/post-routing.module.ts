import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { CurrentPostComponent } from './current-post/current-post.component';
import { ForumComponent } from '../forum/forum.component';
import { AuthActivate } from '../core/guards/authActivate';


const routes: Routes = [
  {
    path: 'posts',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ForumComponent,
      },
      {
        path: ':postId',
        component: CurrentPostComponent
      }
    ]
  },

  { path: 'create-post', 
  component: NewPostComponent,
  //canActivate: [AuthActivate] 
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
