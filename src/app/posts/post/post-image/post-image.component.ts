import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../post.service';

@Component({
  selector: 'post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent implements OnInit {

  @Input()link;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  showImage(){
    this.postService.modalPreview(this.link);
  }


}
