import {browser, by, element} from 'protractor';

export class ApartmentListPage {
  navigateTo() {
    return browser.get('/apartments');
  }

  getParagraphText() {
    return element(by.css('app-apartments h2')).getText();
  }

  getNewApartment() {
    return element(by.css('app-apartments a#new-apartment')).getText();
  }

  gotoNewApartment() {
    return element(by.css('app-apartments a#new-apartment')).click();
  }
}
