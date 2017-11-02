import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }

  getNavDashboard() {
    return element(by.css('nav a#dashboard')).getText();
  }

  getNavApartments() {
    return element(by.css('nav a#apartments')).getText();
  }
}
