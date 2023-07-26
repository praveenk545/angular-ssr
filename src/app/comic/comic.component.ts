import { Component, OnInit } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
})
export class ComicComponent implements OnInit {
  titleServ: any;
  meta: any;
  constructor() {}
  ngOnInit(): void {
    // //To set the title
    // this.titleServ.setTitle('ben');
    // //To set the meta
    // this.meta.addTag({ name: 'description', content: 'SOME one HERE' });
  }
}
