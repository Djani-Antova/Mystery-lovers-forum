import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeAddComponent } from './theme-add/theme-add.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemesAllComponent } from './themes-all/themes-all.component';
import { ThemesLimitComponent } from './themes-limit/themes-limit.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ThemeAddComponent,
    ThemeDetailsComponent,
    ThemesAllComponent,
    ThemesLimitComponent,
    PostEditComponent
  ],
  imports: [
    ThemeRoutingModule,
    CommonModule,
    SharedModule
  ],  
  exports:[
    ThemesAllComponent,
    ThemesLimitComponent
  ]
})
export class ThemeModule { }
