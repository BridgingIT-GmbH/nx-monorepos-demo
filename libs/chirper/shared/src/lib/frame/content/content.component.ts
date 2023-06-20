import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-frame-content',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
})
export class ContentComponent {}
