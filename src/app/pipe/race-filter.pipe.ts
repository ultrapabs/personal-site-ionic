import { Pipe, PipeTransform } from '@angular/core';
import { Race } from '../model/race';

@Pipe({
  name: 'raceFilter'
})
export class RaceFilterPipe implements PipeTransform {

  transform(raceList: Race[], filterText: string, ...args: any[]): any {
    if (raceList == null || filterText == null || filterText.length === 0) { return raceList; }


    return raceList.filter(race =>
      race.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1 ||
      race.date.toLowerCase().indexOf(filterText.toLowerCase()) > -1
    );
  }

}
