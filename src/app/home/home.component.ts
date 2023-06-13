import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChirpComponent} from '../chirp/chirp.component';
import {Chirp} from '../chirp/chirp.model';
import {SidenavComponent} from './sidenav/sidenav.component';
import {AddidtionalAreaComponent} from './additionalarea/addidtional-area.component';
import {Store} from '@ngrx/store';
import {AuthState, isLoggedInSelector} from '../auth/+store/auth.state';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {chirpSelector, ChirpState} from '../chirp/+store/chirp.state';
import * as ChirpActions from '../chirp/+store/chirp.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChirpComponent, SidenavComponent, AddidtionalAreaComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chirpStore = inject(Store<ChirpState>);
  chirps = this.chirpStore.selectSignal(chirpSelector);
  isLoggedIn = inject(Store<AuthState>).selectSignal(isLoggedInSelector);

  chirpInput = new FormControl('');

  ngOnInit() {
    this.chirpStore.dispatch(ChirpActions.loadChirps({}));
  }

  chirpValid() {
    return this.chirpInput.dirty && !!this.chirpInput.value
  }

  addChirp() {

    console.log(this.chirpValid(), this.chirpInput.value);
    if (this.chirpValid()) {
      const chirp: Chirp = {
        user: {
          id: 1,
          profilepic: 'http://localhost:4200/assets/greg.jpg',
          name: 'Gregor',
          handle: '@GregorSpeck'
        },
        id: Math.random() * 10000,
        timestamp: new Date(),
        message: this.chirpInput.value as string
      }
      inject(Store<ChirpState>).dispatch(ChirpActions.addChirp({chirp}));

      console.log(this.chirps);
      this.chirpInput.setValue(null);
    }

  }
}
