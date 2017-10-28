import {browser, by, element} from 'protractor';

export class ApartmentListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-apartment h1')).getText();
  }
}
