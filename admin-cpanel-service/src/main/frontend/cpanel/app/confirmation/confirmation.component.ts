import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from './confirmation.service';
import {Confirmation} from './confirmation';
import {NavigationStart, Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent implements OnInit {

  private confirmation: Confirmation;

  constructor(private router: Router,
              private confirmationService: ConfirmationService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.confirmation) {
          this.close();
        }
      }
    });
  }

  ngOnInit() {
    this.confirmationService.getConfirmation().subscribe((confirmation: Confirmation) => {
      if (confirmation) {
        this.confirmation = confirmation;
      }
    });
  }

  confirm(): void {
    this.confirmation.doResolve();
  }

  close(): void {
    this.confirmation.doReject();
  }
}
