import {Alert, AlertType} from './alert';

describe('Alert', () => {

  it('should create an instance', () => {
    expect(new Alert()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let alert = new Alert({
      type: AlertType.Error,
      message: 'The message'
    });
    expect(alert.type).toEqual(AlertType.Error);
    expect(alert.message).toEqual('The message');
  });
});
