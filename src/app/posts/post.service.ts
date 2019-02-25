import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService{
  private posts: Post[];

  constructor(private http: HttpClient){
    this.posts = new Array<Post>();
  }

  public getPosts(){
    return this.http.get('assets/posts.json');
  }

  public createPost(post: Post): void{

  }
}
