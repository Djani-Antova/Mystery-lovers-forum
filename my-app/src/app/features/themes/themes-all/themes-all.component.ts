import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-all',
  templateUrl: './themes-all.component.html',
  styleUrls: ['./themes-all.component.css']
})
export class ThemesAllComponent implements OnInit {
  themesList: Theme[] = [];
  isLoading: boolean = true;

  constructor(private titlePage: Title,
    private apiService: ApiService) { }
   
    ngOnInit(): void {
      this.titlePage.setTitle('Themes page');
  
   
    }

}
