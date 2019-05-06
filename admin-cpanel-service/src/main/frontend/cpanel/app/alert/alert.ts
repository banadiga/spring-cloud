export class Alert {
  type: AlertType;
  message: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}
