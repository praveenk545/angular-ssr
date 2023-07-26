import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ComicComponent } from './comic/comic.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: 'book',
    component: BooksComponent,
    data: { title: 'books world' },
    canActivate: [],
  },
  {
    path: 'comic',
    component: ComicComponent,
    data: { title: 'naruto' },
    canActivate: [],
  },
  {
    path: 'game',
    component: GameComponent,
    data: { title: 'ben 10 ultimate' },
    canActivate: [],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
