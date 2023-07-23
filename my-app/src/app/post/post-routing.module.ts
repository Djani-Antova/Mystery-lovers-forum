import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { CurrentPostComponent } from './current-post/current-post.component';
import { ForumComponent } from '../forum/forum.component';


const routes: Routes = [
    {path: 'posts', component: ForumComponent},
 
  {path: 'add-post', component: NewPostComponent},
  // {path: 'current-post', component: CurrentPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
