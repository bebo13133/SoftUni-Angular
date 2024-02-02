import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [],
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css'
})
export class ThemesListComponent implements OnInit {
  constructor(private ApiService:ApiService){}
  themes:Theme[] = [];
ngOnInit(): void {
  this.ApiService.getThemes().subscribe(themes =>{
    console.log(themes)
  })
}


}
