import {by, element} from 'protractor';

export abstract class BasePage {
  private title = element(by.css('h2'));
  private alerts = element.all(by.css('app-alert div span'));

  getParagraphText() {
    return this.title.getText();
  }

  getAlertsText() {
    return this.alerts.map(elem => elem.getText());
  }
}
