import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PingService {
  constructor(
    private http: HttpClient,
  ) { }

  getPing(): Observable<string> {
    return this.http.get<string>(environment.apiUrl + '/ping');
  }
}
