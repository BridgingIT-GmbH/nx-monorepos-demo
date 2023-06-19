import { Component, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChirpComponent } from '../../chirp';
import { LoginComponent } from '../../auth';
import { ProfileHeaderComponent } from '../../profile/profile-header/profile-header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [
    CommonModule,
    ChirpComponent,
    LoginComponent,
    ProfileHeaderComponent,
    SidenavComponent,
    SidebarComponent,
  ],
  template: `
    <div class="w-[960px] pt-16 flex-row flex h-full gap-4 min-h-full">
      <div aria-description="left" class="sticky w-[180px]">
        <app-sidenav [isLoggedIn]="isLoggedIn"></app-sidenav>
      </div>
      <div aria-description="content" class="flex-1">
        <ng-content select="app-frame-content"></ng-content>
      </div>
      <div aria-description="right" class="w-[180px] overflow-visible">
        <app-sidebar [isLoggedIn]="isLoggedIn"></app-sidebar>
      </div>
    </div>
  `,
  styles: [],
})
export class FrameComponent {
  @Input({ required: true })
  isLoggedIn!: Signal<boolean>;
}
