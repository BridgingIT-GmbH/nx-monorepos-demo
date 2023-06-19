import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Chirp, ChirpComponent, chirpSelector, ChirpState} from '../chirp';
import {AuthState, isLoggedInSelector, LoginComponent} from '../auth';
import {ReactiveFormsModule} from '@angular/forms';
import {ContentComponent, FrameComponent, SidebarComponent, SidenavComponent} from '../shared';
import {ProfileHeaderComponent} from './profile-header/profile-header.component';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {ProfileState} from './+store';
import {map} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ChirpComponent,
    LoginComponent,
    ReactiveFormsModule,
    SidenavComponent,
    ProfileHeaderComponent,
    FrameComponent,
    ContentComponent,
    SidebarComponent
  ],
  template: `
    <app-frame [isLoggedIn]="isLoggedIn">
      <app-frame-content>
        <app-profile-header [user]="profile"></app-profile-header>
        <app-chirp *ngFor="let chirp of chirps();" [user]="chirp.user" [message]="chirp.message"
                   [timestamp]="chirp.timestamp"></app-chirp>
      </app-frame-content>
    </app-frame>`
})
export class ProfileComponent {
  chirpStore = inject(Store<ChirpState>);
  profileStore = inject(Store<ProfileState>);
  activatedRoute = inject(ActivatedRoute);
  userId = this.activatedRoute.snapshot.data['profile']?.id;
  isLoggedIn = inject(Store<AuthState>).selectSignal(isLoggedInSelector);
  chirps = toSignal(this.chirpStore.pipe(
    select(chirpSelector),
    map((chirps: Chirp[]) => chirps.filter((chirp) => chirp.user.id === this.userId)),
  ));
  profile = this.activatedRoute.snapshot.data['profile'];
}
