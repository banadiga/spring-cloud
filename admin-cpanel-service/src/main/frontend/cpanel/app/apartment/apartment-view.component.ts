import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApartmentService} from './apartment.service';
import {Apartment} from './apartment';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view-apartment',
  templateUrl: './apartment-view.component.html',
  styleUrls: ['./apartment-view.component.css']
})
export class ApartmentViewComponent implements OnInit, OnDestroy {
  title = 'CPanel | Apartment details';
  apartment: Apartment;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apartmentService: ApartmentService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.apartment = this.apartmentService.getApartmentById(params['id']);
      if (this.apartment == null) {
        this.router.navigateByUrl('page-not-found');
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
