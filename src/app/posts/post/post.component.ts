import {Component, Input, OnChanges} from '@angular/core';
import {Post} from '../post.model';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnChanges {

  @Input() post: Post;
  showComments = false;

  constructor() { }

  ngOnChanges() {
    this.post.liked = false;
    Post.timeDelta(this.post, new Date());
    Post.urlify(this.post);
  }

  onToggleComments(show: boolean) {
    this.showComments = show;
  }

  onLikePost() {
    this.post.liked = !this.post.liked;
    if(this.post.liked) this.post.likes ++;
    else this.post.likes --;
  }
}
