import {Component, OnInit} from '@angular/core';
import {ApartmentService} from './apartment.service';
import {Apartment} from './apartment';
import {ConfirmationService} from '../confirmation/confirmation.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  title = 'CPanel | Apartments';

  constructor(private apartmentService: ApartmentService,
              private confirmationService: ConfirmationService) {
  }

  get apartments(): Apartment[] {
    return this.apartmentService.getAllApartments();
  }

  ngOnInit() {
  }

  removeApartment(apartment: Apartment): void {
    this.confirmationService
      .confirm(apartment.id, 'Are you sure you want to remove apartment with location:' + apartment.location + '?')
      .then((id: string) => this.delete(id))
      .catch(() => console.debug('Deleting canceled.'));
  }

  private delete(id: string): void {
    this.apartmentService.deleteApartmentById(id);
    console.warn('Apartment with id ' + id + ' deleted!')
  }
}
