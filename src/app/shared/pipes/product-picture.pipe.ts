import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPicture'
})
export class ProductPicturePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const randomCalc = 1 || Math.ceil(Math.random() * 1024 + 1);
    return `https://www.gravatar.com/avatar/${randomCalc}?s=64&d=identicon&r=PG`;
  }

}
