import { Component, OnInit } from '@angular/core';
import {PostService} from '../posts/post.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalActive = false;
  modalImage = '';

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getModalPreviewListener().subscribe(
      url => {
        this.modalImage = url;
        this.modalActive = true;
      }
    );

    let lastY: number;
    document.ontouchmove = (ev) => {
      if(this.modalActive){
        let currentY = ev.touches[0].clientY;
        if(Math.abs(currentY - lastY) > 50){
          this.modalActive = false;
        }
        lastY = currentY;
      }
    };
  }
}
