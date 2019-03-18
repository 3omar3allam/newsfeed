import {Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'post-video',
  templateUrl: './post-video.component.html',
  styleUrls: ['./post-video.component.scss']
})
export class PostVideoComponent {

  @Input()link;
  @ViewChild('videoContainer')videoContainer;

  constructor() { }

  playVideo(){
    if(this.link) {
      this.videoContainer.nativeElement.innerHTML = `<iframe class="video" src=${this.link} width="100%" height="100%"></iframe>`;
    }
  }

}
