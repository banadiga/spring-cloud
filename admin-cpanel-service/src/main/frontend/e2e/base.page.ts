import {by, element} from 'protractor';

export abstract class BasePage {
  private title = element(by.css('h2'));

  getParagraphText() {
    return this.title.getText();
  }
}
