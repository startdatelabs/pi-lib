import { Pipe, PipeTransform } from '@angular/core';


/**
 * Truncates a long string after N characters, then appends an ellipsis.
 * By default, N is 100.
 *
 * <a [href]="{{'very_long_URL'}}">
 *   {{'very_long_URL' | piEllipsize:64 | piBreakable}}
 * </a>
 *
 */

@Pipe({ name: 'piEllipsize' })

export class EllipsizePipe implements PipeTransform {

  transform(s: string,
            max = 100): string {
    return (s.length > max)? `${s.substring(0, max)}\u2026` : s;
  }

}
