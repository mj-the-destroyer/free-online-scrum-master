import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { DonationsService } from './donations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public donations$: Observable<number> = this.donationsService.getDonations();

  constructor(
    private donationsService: DonationsService,
  ) { }

  public onDonatePressed() {
    this.donations$ = this.donationsService.donate();
  }
}
