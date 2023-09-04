import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFly implements PipeTransform {
  transform(value: boolean, ...args: any[]): 'Vuela' | 'No Vuela' {
    return value ? 'Vuela' : 'No Vuela';
  }
}
