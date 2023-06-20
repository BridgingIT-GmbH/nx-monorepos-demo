import { Component, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'lib-frame',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
    SidebarComponent
  ],
  template: `
    <div class='w-[960px] pt-16 flex-row flex h-full gap-4 min-h-full'>
      <div aria-description='left' class='sticky w-[180px]'>
        <lib-sidenav [isLoggedIn]='isLoggedIn'></lib-sidenav>
      </div>
      <div aria-description='content' class='flex-1'>
        <ng-content select='lib-frame-content'></ng-content>
      </div>
      <div aria-description='right' class='w-[180px] overflow-visible'>
        <lib-sidebar [isLoggedIn]='isLoggedIn'></lib-sidebar>
      </div>
    </div>
  `,
  styles: []
})
export class FrameComponent {
  @Input({ required: true })
  isLoggedIn!: Signal<boolean>;
}
