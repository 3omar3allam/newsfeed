import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'post-buttons',
  templateUrl: './post-buttons.component.html',
  styleUrls: ['./post-buttons.component.scss']
})
export class PostButtonsComponent {

  @Output()toggleComments = new EventEmitter<boolean>();
  @Output()likePost = new EventEmitter<void>();

  @Input()liked: boolean;

  commentsVisible = false;
  constructor() { }

  showComments() {
    this.commentsVisible = !this.commentsVisible;
    this.toggleComments.emit(this.commentsVisible);
  }

  like() {
    this.liked = !this.liked;
    this.likePost.emit();
  }

}
