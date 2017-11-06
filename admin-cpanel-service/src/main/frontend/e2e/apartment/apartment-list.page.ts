import {by, element} from 'protractor';
import {BasePage} from '../base.page';
import {ApartmentNewPage} from './apartment-new.page';
import {ApartmentViewPage} from './apartment-view.page';

export class ApartmentListPage extends BasePage {

  private newApartmentsLink = element(by.css('app-apartments a#new-apartment'));
  private apartments = element.all(by.css('app-apartments div.view a'));

  getNewApartmentText() {
    return this.newApartmentsLink.getText();
  }

  clickNewApartment() {
    this.newApartmentsLink.click();
    return new ApartmentNewPage();
  }

  countApartments() {
    return this.apartments.count();
  }

  getApartmentsLocation() {
    return this.apartments
      .map(elem => elem.getText());
  }

  clickOnLocation(location: string) {
    this.apartments
      .filter(elem => elem.getText().then(text => text === location))
      .first().click();
    return new ApartmentViewPage();
  }
}
