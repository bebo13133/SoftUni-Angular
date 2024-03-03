import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
@Pipe({
  name: 'elapsedTime',
  standalone: true
})
export class ElapsedTimePipe implements PipeTransform {

  transform(dataString: string, ...args: unknown[]): unknown {
    return moment(dataString).fromNow();

  }
}