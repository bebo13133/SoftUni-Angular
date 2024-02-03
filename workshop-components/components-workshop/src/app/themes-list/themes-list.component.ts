import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css'
})
export class ThemesListComponent implements OnInit {
  themesList: Theme[] = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getThemes().subscribe((themes) => {
      this.themesList = themes
    })
  }


}
