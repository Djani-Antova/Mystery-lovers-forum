import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css']
})
export class ThemeDetailsComponent implements OnInit{

  theme: Theme | undefined;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getThemeWithDetails();
  }

  getThemeWithDetails(): void {
    const themeId = this.activatedRoute.snapshot.params['themeId'];

    this.apiService.getTheme(themeId).subscribe({
      next: (theme) => {
        this.theme = theme;
        console.log({ theme });
      },
      error: (err) => {
        this.router.navigate(["**"]);
      }
    })
  }
}
