import {Alert, AlertType} from "./alert";

describe('Alert', () => {
  it('should create an instance', () => {
    expect(new Alert()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let apartment = new Alert({
      type: AlertType.Error,
      message: 'The message'
    });
    expect(apartment.type).toEqual(AlertType.Error);
    expect(apartment.message).toEqual('The message');
  });
});
