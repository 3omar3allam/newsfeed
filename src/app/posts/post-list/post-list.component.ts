import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  postSubs: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubs = this.postService.getPosts()
      .subscribe(
        posts => {
          this.posts = posts;
        },
        () => {},
        () => {
          this.postSubs.unsubscribe();
        });
  }

}
