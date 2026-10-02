import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
})
export class uppercasePipe implements PipeTransform {
  transform(value: string) {
    return value.toUpperCase();
  }
}
