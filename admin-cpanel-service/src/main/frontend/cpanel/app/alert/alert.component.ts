import {Component, OnInit} from '@angular/core';
import {Alert, AlertType} from './alert';
import {AlertService} from './alert.service';

@Component({
  moduleId: module.id,
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      if (!alert) {
        this.alerts = [];
        return;
      }

      this.alerts.push(alert);
    });
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

    switch (alert.type) {
      case AlertType.Success:
        return 'success';
      case AlertType.Error:
        return 'danger';
      case AlertType.Info:
        return 'info';
      case AlertType.Warning:
        return 'warning';
    }
  }
}
