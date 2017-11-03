import {by, element} from 'protractor';
import {protractor} from 'protractor/built/ptor';
import {Apartment} from '../../cpanel/app/apartment/apartment';
import {BasePage} from '../base.page';

export class ApartmentNewPage extends BasePage {

  private errors = element.all(by.css('app-new-apartment div.error'));

  private location = element(by.css('app-new-apartment input[formControlName=location]'));
  private sqft = element(by.css('app-new-apartment input[formControlName=sqft]'));
  private price = element(by.css('app-new-apartment input[formControlName=price]'));
  private realtorName = element(by.css('app-new-apartment input[formControlName=realtorName]'));
  private mail = element(by.css('app-new-apartment input[formControlName=mail]'));
  private phone = element(by.css('app-new-apartment input[formControlName=phone]'));

  private submit = element(by.css('app-new-apartment button'));

  create(apartment: Apartment) {
    this.setLocation(apartment.location);
    this.setSqft(apartment.sqft);
    this.setPrice(apartment.price);
    this.setRealtorName(apartment.realtorName);
    this.setMail(apartment.mail);
    this.setPhone(apartment.phone);
    this.clickSubmit();
  }

  setLocation(location: string) {
    this.location.sendKeys(location);
    this.location.sendKeys(protractor.Key.TAB);
  }

  setSqft(sqft: string) {
    this.sqft.sendKeys(sqft);
    this.sqft.sendKeys(protractor.Key.TAB);
  }

  setPrice(price: string) {
    this.price.sendKeys(price);
    this.price.sendKeys(protractor.Key.TAB);
  }

  setRealtorName(realtorName: string) {
    this.realtorName.sendKeys(realtorName);
    this.realtorName.sendKeys(protractor.Key.TAB);
  }

  setMail(mail: string) {
    this.mail.sendKeys(mail);
    this.mail.sendKeys(protractor.Key.TAB);
  }

  setPhone(phone: string) {
    this.phone.sendKeys(phone);
    this.phone.sendKeys(protractor.Key.TAB);
  }

  getErrorsText() {
    return this.errors.map(elm => elm.getText());
  }

  isEnableSubmit() {
    return this.submit.isEnabled();
  }

  clickSubmit() {
    return this.submit.click();
  }
}
