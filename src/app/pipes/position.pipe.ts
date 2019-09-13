import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(position:number): any {

    if(position < 0){
      return 'NP';
    }
    if(position > 16){
      return 'NT';
    }
    if(position == 0){
      return '-';
    }
    return position;
  }


}
