import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  title = 'Page not found';

  constructor(private router: Router) {
  }

  goBack() {
    this.router.navigateByUrl('dashboard');
  }

  ngOnInit() {
  }
}
