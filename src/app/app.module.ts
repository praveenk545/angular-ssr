import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { BooksComponent } from './books/books.component';
import { ComicComponent } from './comic/comic.component';
import { GameComponent } from './game/game.component';
import { TempleteComponent } from './templete/templete.component';
import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { FormsModule } from '@angular/forms';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    BooksComponent,
    ComicComponent,
    GameComponent,
    TempleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    // MarkdownModule.forRoot({
    //   loader: HttpClient,
    //   sanitize: SecurityContext.NONE,
    // }),
    MarkdownModule.forRoot(),
  ],
  providers: [Title],

  bootstrap: [AppComponent],
})
export class AppModule {}
