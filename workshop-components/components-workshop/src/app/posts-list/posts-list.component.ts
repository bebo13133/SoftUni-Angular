import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit{

  postList:Post[] = []

constructor(private ApiService: ApiService){}
ngOnInit ():void {

  this.ApiService.getPosts(5).subscribe((posts)=>{
    console.log('posts',posts);
   this.postList = posts;
  })
}

}
