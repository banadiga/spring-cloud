import {browser, by, element} from 'protractor';
import {protractor} from "protractor/built/ptor";

export class ApartmentNewPage {
  navigateTo() {
    return browser.get('/new-apartment');
  }

  getParagraphText() {
    return element(by.css('app-new-apartment h2')).getText();
  }

  location(location: string) {
    let input = element(by.css('app-new-apartment input[formControlName=location]'));
    input.sendKeys(location);
    input.sendKeys(protractor.Key.TAB);
  }

  sqft(sqft: string) {
    let input = element(by.css('app-new-apartment input[formControlName=sqft]'));
    input.sendKeys(sqft);
    input.sendKeys(protractor.Key.TAB);
  }

  price(price: string) {
    let input = element(by.css('app-new-apartment input[formControlName=price]'));
    input.sendKeys(price);
    input.sendKeys(protractor.Key.TAB);
  }

  realtorName(realtorName: string) {
    let input = element(by.css('app-new-apartment input[formControlName=realtorName]'));
    input.sendKeys(realtorName);
    input.sendKeys(protractor.Key.TAB);
  }

  mail(mail: string) {
    let input = element(by.css('app-new-apartment input[formControlName=mail]'));
    input.sendKeys(mail);
    input.sendKeys(protractor.Key.TAB);
  }

  phone(phone: string) {
    let input = element(by.css('app-new-apartment input[formControlName=phone]'));
    input.sendKeys(phone);
    input.sendKeys(protractor.Key.TAB);
  }

  getErrorsText() {
    return element.all(by.css('app-new-apartment div.error')).map(function (elm, index) {
      return elm.getText();
    });
  }

  isEnableSubmit() {
    return element(by.css('app-new-apartment button')).isEnabled();
  }

  submit() {
    return element(by.css('app-new-apartment button')).click();
  }
}
