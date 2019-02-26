import { Component, Input } from '@angular/core';
import { User } from '../post.model';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent{
  @Input() comment: {creator: User, text: string};
}
