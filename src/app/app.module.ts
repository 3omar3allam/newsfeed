import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostComponent } from './posts/post/post.component';
import { MaterialModule } from './common/material.module';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { PostListComponent } from './posts/posts-list/post-list.component';
import { SafePipe } from './common/safe.pipe';
import { CommentComponent } from './posts/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    CommentComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
