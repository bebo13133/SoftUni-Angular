import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  standalone: true,

})
export class ReducePipe <T>implements PipeTransform {

  transform(array: T[],reduceFn:(acc:any, curr:T)=> any, initialValue:T): unknown {
    return array.reduce(reduceFn,initialValue);
  }

}
