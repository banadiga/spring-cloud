export class Confirmation {
  id: string;
  message: string;

  private resolve: (value?: string | PromiseLike<string>) => void;
  private reject: (reason?: any) => void;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  doReject(): void {
    this.reject();
  }

  doResolve(): void {
    this.resolve(this.id);
  }
}
