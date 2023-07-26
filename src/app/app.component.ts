import { Component, OnInit, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import { filter, map } from 'rxjs';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'seo 12';
  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        var rt = this.getChild(this.activatedRoute);

        rt.data.subscribe((data: { title: string }) => {
          console.log('title seo', data);
          this.titleService.setTitle(data.title);
        });
      });
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
  //   this.router.events
  //     .pipe(
  //       filter((event) => event instanceof NavigationEnd),
  //       map(() => {
  //         const child: ActivatedRoute | null = this.route.firstChild;
  //         let title = child && child.snapshot.data['title'];
  //         if (title) {
  //           return title;
  //         }
  //       })
  //     )
  //     .subscribe((data) => {
  //       if (data) {
  //         this.titleService.setTitle(data.title);
  //       }
  //     });
  // }
}
