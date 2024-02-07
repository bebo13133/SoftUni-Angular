import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [],
  templateUrl: './current-theme.component.html',
  styleUrl: './current-theme.component.css'
})
export class CurrentThemeComponent implements OnInit {
  theme:Theme | undefined;
constructor(private apiService:ApiService, private activatedRoute: ActivatedRoute ){}

ngOnInit(): void {
  const id = this.activatedRoute.snapshot.params['themeId']
  this.apiService.getTheme(id).subscribe(theme =>{
    console.log('theme',theme);
  })
}
}
