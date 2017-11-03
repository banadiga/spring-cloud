import {by, element} from 'protractor';

export abstract class BasePage {

  getParagraphText() {
    return element(by.css('h2')).getText();
  }
}
