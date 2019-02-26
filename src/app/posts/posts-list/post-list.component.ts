import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'posts-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit{
  posts: Post[];
  modalActive = false;
  modalImage = "";

  constructor(
    private postService: PostService
  ){}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = Object.values(posts as Post[]).map(post => {
        let now = new Date();
        this.timeDelta(now,post)
        if(post.type === 'text') this.urlify(post);
        return post;
      });
    });

    this.postService.getModalPreviewListener().subscribe(
      url => {
        this.modalImage = url;
        this.modalActive = true;
      }
    );
  }



  timeDelta(now: Date,post: Post){
    let milliDiff = now.getTime() - new Date(post.date).getTime();
    let yearDiff = Math.floor(milliDiff/ (1000*3600*24*365));
    if(yearDiff){
      post.dateDiff = `${yearDiff} year`;
      if(yearDiff>1) post.dateDiff += 's';
      return;
    }
    let monthDiff = Math.floor(milliDiff/ (1000*3600*24*30));
    if(monthDiff){
      post.dateDiff = `${monthDiff} month`;
      if(monthDiff>1) post.dateDiff += 's';
      return;
    }
    let weekDiff = Math.floor(milliDiff/ (1000*3600*24*7));
    if(weekDiff){
      post.dateDiff = `${weekDiff} week`;
      if(weekDiff>1) post.dateDiff += 's';
      return;
    }
    let dayDiff = Math.floor(milliDiff/ (1000*3600*24));
    if(dayDiff){
      post.dateDiff = `${dayDiff} day`;
      if(dayDiff>1) post.dateDiff += 's';
      return;
    }
    let hourDiff = Math.floor(milliDiff/ (1000*3600));
    if(hourDiff){
      post.dateDiff = `${hourDiff} hour`;
      if(hourDiff>1) post.dateDiff += 's';
      return;
    }
    let minDiff = Math.floor(milliDiff/ (1000*60));
    if(minDiff){
      post.dateDiff = `${minDiff} minute`;
      if(minDiff>1) post.dateDiff += 's';
      return;
    }
    let secDiff= Math.floor(milliDiff/ 1000);
    post.dateDiff = `${secDiff} second`;
    if(secDiff>1) post.dateDiff += 's';
  }

  private urlify(post: Post){
    let urlRegex = /(http(s)?:\/\/)?(www\.)?([\w\-]+\.)?([\w\-]+)(:\d)?(\.[a-z]{2,3})+(\/[\w\-\.]+)*(\?[^\s]+)?/gi;
    let groups = {
      protocol: 1,
      ssl: 2,
      www: 3,
      subdomain: 4,
      domain: 5,
      port: 6,
      tlp: 7,
      path: 8,
      params: 9,
    }
    if(!post.content|| post.content == ""){
      post.showContent = "";
      return;
    }
    let links = post.content.match(urlRegex);
    post.showContent = post.content;
    if(!links){
      return;
    }
    else{
      for(let link of links){
        let urlComponents = urlRegex.exec(link);
        urlRegex.lastIndex = 0;
        let protocol = "";
        if(!urlComponents[groups.protocol]){
          protocol = "http://";
        }
        post.showContent = post.showContent.replace(
          link,
          `<a href=\'${protocol+link}\' target="_blank">${link}</a>`
        );
      }
    }
  }
}
