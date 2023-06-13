import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'relativeTime',
  standalone: true
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: string | Date): unknown {
    const formatter = new Intl.RelativeTimeFormat('de-DE', {
      numeric: 'always',
      style: 'long'
    })

    const time = new Date(value);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - time.getTime()) / 1000);

    if (seconds < 60) {
      return 'gerade eben';
    } else if (seconds < 120) {
      return formatter.format(-1, 'minute');
    } else if (seconds < 3600) {
      return formatter.format(Math.floor(seconds / 60) * -1, 'minutes');
    } else if (seconds < 7200) {
      return formatter.format(-1, 'hour');
    } else if (seconds < 86400) {
      return formatter.format(Math.floor(seconds / 3600) * -1, 'hour');
    } else {
      return time.toLocaleString();
    }
  }

}
