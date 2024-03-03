import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../shared/loader/loader.component';
import { ElapsedTimePipe } from '../shared/pipes/elapsed-time.pipe';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, LoaderComponent,ElapsedTimePipe],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  isLoading: boolean = true;
  postList: Post[] = []

  constructor(private ApiService: ApiService) { }
  ngOnInit(): void {

    this.ApiService.getPosts(5).subscribe({
      next: (posts) => {
        this.postList = posts;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false
        console.error(err)
      }
    })
  }

}
