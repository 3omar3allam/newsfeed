import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './posts/post/post.component';
import { MaterialModule } from './common/material.module';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { PostListComponent } from './posts/posts-list/post-list.component';
import { SafePipe } from './common/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
