import {browser, by, element} from 'protractor';

export class DashboardPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  getParagraphText() {
    return element(by.css('app-root app-dashboard h2')).getText();
  }
}
