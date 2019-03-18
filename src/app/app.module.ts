import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { CommentComponent } from './posts/post/comment/comment.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostComponent } from './posts/post/post.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { PostImageComponent } from './posts/post/post-image/post-image.component';
import { PostVideoComponent } from './posts/post/post-video/post-video.component';
import { PostButtonsComponent } from './posts/post/post-buttons/post-buttons.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostListComponent,
    PostComponent,
    ModalComponent,
    HeaderComponent,
    PostImageComponent,
    PostVideoComponent,
    PostButtonsComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
