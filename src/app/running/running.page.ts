import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { RaceService } from '../service/race.service';
import { Race } from '../model/race';
import { RaceFilterPipe } from '../pipe/race-filter.pipe';

@Component({
  selector: 'app-running',
  templateUrl: 'running.page.html',
  styleUrls: ['running.page.scss']
})
export class RunningPage {

  pageTitle: string = 'Running';
  descText: string = 'Upcoming races and past results';
  raceList: Race[];
  listExpanded: boolean;
  filterText: string;
  initialLength: number =  5;
  raceFilterPipe: RaceFilterPipe = new RaceFilterPipe();

  constructor(
    private platform: Platform,
    private raceService: RaceService
  ) {}

  ngOnInit() {
    this.raceList = this.raceService.getRaces();
    this.listExpanded = false;
    this.filterText = null;
  }

  isMobile() {
    return this.platform.is('mobile');
  }

  expandList() {
    this.listExpanded = true;
  }

  showShowMore() {
    if (this.listExpanded) {
      return false;
    } else {
      let filteredRaceList = this.raceFilterPipe.transform(this.raceList, this.filterText);

      return this.initialLength < filteredRaceList.length;
    }
  }
}
