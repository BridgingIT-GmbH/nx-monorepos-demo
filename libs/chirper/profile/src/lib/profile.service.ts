import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from './index';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  apiUrl = '/assets/api/profile';
  http = inject(HttpClient);

  getUserProfile(userId: number): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/${userId}.json`);
  }
}
