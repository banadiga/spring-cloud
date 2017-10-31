import {browser, by, element} from 'protractor';

export class ApartmentListPage {
  navigateTo() {
    return browser.get('/apartments');
  }

  getParagraphText() {
    return element(by.css('app-root app-apartment h2')).getText();
  }
}
