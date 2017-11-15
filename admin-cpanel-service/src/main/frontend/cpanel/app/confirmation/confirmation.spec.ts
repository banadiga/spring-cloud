import {Confirmation} from "./confirmation";

describe('Confirmation', () => {

  it('should create an instance', () => {
    expect(new Confirmation()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let confirmation = new Confirmation({
      id: 'my-id',
      message: 'The message'
    });
    expect(confirmation.id).toEqual('my-id');
    expect(confirmation.message).toEqual('The message');
  });

  describe('#doReject', () => {

    it('should reject', () => {
      let rejected: boolean = false;
      let confirmation = new Confirmation({
        id: 'my-id',
        message: 'The message',
        reject: () => {
          rejected = true
        }
      });

      confirmation.doReject();
      expect(rejected).toEqual(true);
    });
  });

  describe('#doResolve', () => {

    it('should resolve', () => {
      let resolved: string = '';
      let confirmation = new Confirmation({
        id: 'my-id',
        message: 'The message',
        resolve: (id: string) => {
          resolved = id + '-resolved'
        }
      });

      confirmation.doResolve();
      expect(resolved).toEqual('my-id-resolved');
    });
  });
});
