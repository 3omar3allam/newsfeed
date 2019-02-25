import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService{
  private modalPreviewListener = new Subject<string>();

  constructor(private http: HttpClient){}

  public getPosts(){
    return this.http.get('assets/posts.json');
  }

  public modalPreview(url: string){
    this.modalPreviewListener.next(url);
  }
  
  public getModalPreviewListener(): Observable<string>{
    return this.modalPreviewListener.asObservable();
  }
}
