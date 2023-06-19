import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chirp } from './chirp.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChirpService {
  apiUrl = '/assets/api/chirps';
  http = inject(HttpClient);

  getChirps(userId?: number): Observable<Chirp[]> {
    return this.http.get<Chirp[]>(`${this.apiUrl}/${userId}.json`);
  }
}
