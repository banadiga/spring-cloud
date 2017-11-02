import {browser, by, element} from 'protractor';

export class ApartmentNewPage {
  navigateTo() {
    return browser.get('/new-apartment');
  }

  getParagraphText() {
    return element(by.css('app-new-apartment h2')).getText();
  }

  location(location: string) {
    return element(by.css('app-new-apartment input[formControlName=location]')).sendKeys(location);
  }

  realtorName(realtorName: string) {
    return element(by.css('app-new-apartment input[formControlName=realtorName]')).sendKeys(realtorName);
  }

  getErrorsText() {
    return element.all(by.css('app-new-apartment div.error')).map(function (elm, index) {
      return elm.getText();
    });
  }

  submit() {
    return element(by.css('app-new-apartment button')).click();
  }
}
