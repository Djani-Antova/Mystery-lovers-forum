import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CommentsComponent } from './comments/comments.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForumComponent,
    CreateThreadComponent,
    CommentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, SharedModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
