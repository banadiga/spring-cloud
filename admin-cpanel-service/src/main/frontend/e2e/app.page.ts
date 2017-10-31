import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getNavDashboard() {
    return element(by.css('app-root nav a#dashboard')).getText();
  }

  getNavApartments() {
    return element(by.css('app-root nav a#apartments')).getText();
  }
}
