import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DonationsService {
  constructor(
    private http: HttpClient,
  ) { }

  public getDonations(): Observable<number> {
    return this.http.get<number>(environment.apiUrl + '/donations');
  }

  public donate(): Observable<number> {
    return this.http.post<number>(environment.apiUrl + '/donations', {});
  }
}
