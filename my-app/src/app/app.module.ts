import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CommentsComponent } from './comments/comments.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

// Import Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForumComponent,   
    CommentsComponent, 
    PageNotFoundComponent,
  ],
  imports: [BrowserModule,  CoreModule, HttpClientModule, SharedModule, UserModule, PostModule,   MatButtonModule, AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
