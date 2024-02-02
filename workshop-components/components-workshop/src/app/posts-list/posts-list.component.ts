import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit{

posts:Post[] = []

constructor(private ApiService: ApiService){}
ngOnInit ():void {

  this.ApiService.getPosts(5).subscribe((posts)=>{
    console.log(posts)
  })
}

}
