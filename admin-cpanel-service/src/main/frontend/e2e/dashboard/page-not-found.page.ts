import {browser, by, element} from 'protractor';

export class PageNotFoundPage {
  navigateTo() {
    return browser.get('/not-existing-page');
  }

  getParagraphText() {
    return element(by.css('app-page-not-found h2')).getText();
  }

  getBackLink() {
    return element(by.css('app-page-not-found a')).getText();
  }

  goBack() {
    return element(by.css('app-page-not-found a')).click();
  }
}
