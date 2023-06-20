import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../profile.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-profile-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: ` <div
    *ngIf="user"
    class="text-slate-800 overflow-hidden flex flex-col rounded-lg border-slate-200 gap-5 border mb-5 "
  >
    <div
      class="h-40 relative bg-cover bg-center"
      style="background-image: url({{ user.bannerpic }})"
    >
      <img
        [alt]="user.name"
        class="left-12 w-32 h-32 absolute -bottom-16 rounded-full border-sky-700 border-2"
        [src]="user.profilepic"
      />
    </div>

    <div class="flex px-12 pt-14">
      <div class="text-sky-700 flex flex-col items-start justify-start">
        <a [routerLink]="['profile', user.id]" class="font-bold leading-5">
          {{ user.name }}
        </a>
        <a [routerLink]="['profile', user.id]" class="font-bold leading-5">
          <span class="font-normal text-xs">{{ user.handle }}</span>
        </a>
        <div class="text-slate-800 text-xs pt-1">
          <span
            ><span class="font-bold">{{ user.following.length }}</span> folge
            ich,
          </span>
          <span
            ><span class="font-bold">{{ user.follower.length }}</span> folgen
            mir</span
          >
        </div>
      </div>
    </div>
    <div class="px-12">
      {{ user.profiletext }}
    </div>
    <div class="px-12 pb-10 text-xs flex justify-between">
      <a
        class="underline text-sky-700 underline-offset-2"
        href="{{ user.url }}"
        target="_blank"
        >{{ user.url }}</a
      >
      <span class=" text-slate-400">Seit 20.04.2023 bei Chirper</span>
    </div>
  </div>`,
})
export class ProfileHeaderComponent {
  @Input()
  user!: UserProfile | null;
}
