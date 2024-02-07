import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../../welcome/welcome.component';
import { UserService } from '../../../user/user.service';

@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [CommonModule,WelcomeComponent],
  templateUrl: './current-theme.component.html',
  styleUrl: './current-theme.component.css'
})
export class CurrentThemeComponent implements OnInit {
  theme: Theme | undefined;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private userService:UserService) { }

  get isLogged(): boolean {
    return this.userService.isLogged
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['themeId']
    this.apiService.getTheme(id).subscribe({
      next: theme => {
        console.log("theme", theme)
     this.theme = theme;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
