import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { CommonModule,  } from '@angular/common';
import { LoaderComponent } from '../shared/loader/loader.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';
import { SlicePipe } from '../shared/pipes/slice.pipe';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [CommonModule,LoaderComponent,WelcomeComponent,RouterLink,SlicePipe],
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css'
})
export class ThemesListComponent implements OnInit {
  themesList: Theme[] = [];
  isLoading:boolean = true;
  constructor(private ApiService: ApiService, private userService:UserService) { }

get isLoggedIn():boolean {
  return this.userService.isLogged
}

  ngOnInit(): void {
    this.ApiService.getThemes().subscribe({
      next: (themes) => {
 
        this.themesList = themes
        this.isLoading =false
      },
      error: (err) => {
        this.isLoading = false
        console.error(err)
      }
    })
  }


}
