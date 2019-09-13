import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'countryFlag'
})
export class CountryFlagPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }

  transform(country: string, otherHtml:string = ""): SafeHtml {
    let html = country ? `${otherHtml} <span class="flag-icon flag-icon-${country}"></span>` : otherHtml;

    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

}
