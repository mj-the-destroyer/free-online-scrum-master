import { Component } from '@angular/core';

import { PingService } from './ping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public ping$ = this.pingService.getPing();

  constructor(
    private pingService: PingService,
  ) { }
}
