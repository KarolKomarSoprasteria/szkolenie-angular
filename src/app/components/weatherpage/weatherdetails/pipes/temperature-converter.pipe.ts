import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: string, unit: string) {

          if(value){

                 if(unit === 'C'){
                   var tempareature = (Number.parseInt(value) - 32) / 1.8 ;
                   return tempareature.toFixed(1);
                 }
                 if(unit === 'F'){
                  var tempareature = (Number.parseInt(value) * 1.8) + 32 ;
                  return tempareature.toFixed(1);
                }
          }
    return;
  }

}