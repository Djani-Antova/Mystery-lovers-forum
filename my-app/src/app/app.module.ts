import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './features/home/home.component';


import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';


// Import Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { TosComponent } from './tos/tos.component';
import { UserModule } from './features/user/user.module';

import { ThemeModule } from './features/themes/theme.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    TosComponent,
    PageNotFoundComponent,
   
  ],
  imports: [BrowserModule,  CoreModule, HttpClientModule, SharedModule, UserModule, ThemeModule,  MatButtonModule, AppRoutingModule, BrowserAnimationsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
