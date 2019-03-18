import {Injectable} from '@angular/core';
import {from, of, Subject} from 'rxjs';
import {catchError, flatMap, map, toArray} from 'rxjs/operators';
import {Post} from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private modalPreviewListener = new Subject<string>();

  public getPosts() {
    return from(fetch('assets/posts.json'))
      .pipe(
        flatMap(response => response.json()),
        catchError(() => of([]))
      );
  }

  public modalPreview(url: string){
    this.modalPreviewListener.next(url);
  }

  public getModalPreviewListener() {
    return this.modalPreviewListener.asObservable();
  }
}
