import {browser, by, element} from 'protractor';
import {BasePage} from '../base.page';

export class ApartmentViewPage extends BasePage {
  private location = element(by.css('app-view-apartment #location'));
  private sqft = element(by.css('app-view-apartment #sqft'));
  private price = element(by.css('app-view-apartment #price'));
  private realtorName = element(by.css('app-view-apartment #realtorName'));
  private mail = element(by.css('app-view-apartment #mail'));
  private phone = element(by.css('app-view-apartment #phone'));

  navigateToNotExistingId() {
    return browser.get('/apartments/not-existing-id');
  }


  getLocationText() {
    return this.location.getText();
  }

  getSsqftText() {
    return this.sqft.getText();
  }

  getPriceText() {
    return this.price.getText();
  }

  getRealtorNameText() {
    return this.realtorName.getText();
  }

  getMailText() {
    return this.mail.getText();
  }

  getPhoneText() {
    return this.phone.getText();
  }
}
