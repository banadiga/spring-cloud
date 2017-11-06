import {browser, by, element} from 'protractor';
import {BasePage} from '../base.page';

export class PageNotFoundPage extends BasePage {
  private backLink = element(by.css('app-page-not-found a'));

  navigateToNotExistingPage() {
    return browser.get('/not-existing-page');
  }

  getBackLinkText() {
    return this.backLink.getText();
  }

  gotoBack() {
    return this.backLink.click();
  }
}
