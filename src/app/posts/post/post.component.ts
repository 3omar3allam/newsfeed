import { Component, Input, OnChanges } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnChanges{
  @Input() post: Post;
  showComments = false;

  constructor(private postService: PostService){}
  ngOnChanges(){
    this.post.liked = false;
  }

  like(){
    this.post.liked = !this.post.liked;
    if(this.post.liked) this.post.likes ++;
    else this.post.likes --;
  }

  showImage(){
    this.postService.modalPreview(this.post.content);
  }
}
