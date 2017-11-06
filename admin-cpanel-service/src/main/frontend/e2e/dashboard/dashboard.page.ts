import {BasePage} from '../base.page';
import {by, element} from 'protractor';

export class DashboardPage extends BasePage {
  private apartmentDetails = element(by.css('app-dashboard .apartment-details'));
  private hacksterDetails = element(by.css('app-dashboard .hackster-details'));
  private ratingDetails = element(by.css('app-dashboard .rating-details'));

  getApartmentDetailsText() {
    return this.apartmentDetails.getText();
  }

  getHacksterDetailsText() {
    return this.hacksterDetails.getText();
  }

  getRatingDetailsText() {
    return this.ratingDetails.getText();
  }
}
