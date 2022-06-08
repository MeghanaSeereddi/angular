import { Pipe, PipeTransform } from '@angular/core';

@Pipe({//decorator
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(value);
    if(value.length> 4){
      return value.substring(0,4)+'...';
    }
    return value;
  }
}