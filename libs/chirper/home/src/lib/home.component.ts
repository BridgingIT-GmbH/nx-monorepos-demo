import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AuthState, isLoggedInSelector, LoginComponent } from '@chirper/auth';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  Chirp,
  ChirpActions,
  ChirpComponent,
  chirpSelector,
  ChirpState,
} from '@chirper/chirp';
import {
  ContentComponent,
  FrameComponent,
  SidebarComponent,
  SidenavComponent,
} from '@chirper/shared';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [
    CommonModule,
    ChirpComponent,
    SidenavComponent,
    ReactiveFormsModule,
    LoginComponent,
    ContentComponent,
    FrameComponent,
    SidebarComponent,
  ],
  template: ` <lib-frame [isLoggedIn]="isLoggedIn">
    <lib-frame-content>
      <div
        *ngIf="isLoggedIn()"
        class="ext-slate-800 p-5 flex rounded-lg border-slate-200 gap-5 border mb-5"
      >
        <img
          [alt]="'Gregor'"
          class="w-14 h-14 rounded-full border-sky-700 border-2"
          src="/assets/greg.jpg"
        />
        <div class="flex-1 flex flex-col items-end justify-end">
          <textarea
            [formControl]="chirpInput"
            class="w-full"
            placeholder="Was gibts neues...?"
          ></textarea>
          <button
            class="rounded-lg bg-sky-700 h-8 flex items-center justify-center text-white mt-3 px-4 py-1"
            (click)="addChirp()"
          >
            Chirp it
          </button>
        </div>
      </div>
      <lib-chirp
        *ngFor="let chirp of chirps()"
        [user]="chirp.user"
        [message]="chirp.message"
        [timestamp]="chirp.timestamp"
      ></lib-chirp>
    </lib-frame-content>
  </lib-frame>`,
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
    return this.chirpInput.dirty && !!this.chirpInput.value;
  }

  addChirp() {
    if (this.chirpValid()) {
      const chirp: Chirp = {
        user: {
          id: 1,
          profilepic: 'http://localhost:4200/assets/greg.jpg',
          name: 'Gregor',
          handle: '@GregorSpeck',
        },
        id: Math.random() * 10000,
        timestamp: new Date(),
        message: this.chirpInput.value as string,
      };
      this.chirpStore.dispatch(ChirpActions.addChirp({ chirp }));

      this.chirpInput.setValue(null);
    }
  }
}
