import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {User} from '../user';
import {RelativeTimePipe} from './relative-time.pipe';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-chirp',
  standalone: true,
  imports: [CommonModule, RelativeTimePipe, RouterLink],
  template: `
    <div class="text-slate-800 p-5 flex rounded-lg border-slate-200 gap-5 border mb-5">
      <a [routerLink]="['/','/profile', user.id]"><img [alt]="user.name" class="w-14 h-14 rounded-full border-sky-700 border-2"
                                                  [src]="user.profilepic"></a>
      <div class="flex flex-1 flex-col">
        <div class="text-sky-700 flex items-center justify-between"><a [routerLink]="['/','profile', user.id]"
                                                                       class="font-bold">{{user.name}} <span
          class="pl-2 font-normal">{{user.handle}}</span></a> <span
          class="text-slate-400 text-xs">{{timestamp | relativeTime }}</span></div>
        <div class="">{{message}}</div>
      </div>
    </div>`
})
export class ChirpComponent {
  @Input({required: true})
  user!: User;

  @Input()
  message!: string;

  @Input()
  timestamp!: string | Date;
}
