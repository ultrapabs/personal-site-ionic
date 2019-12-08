import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { RaceService } from '../service/race.service';
import { Race } from '../model/race';
import { RaceFilterPipe } from '../pipe/race-filter.pipe';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pageTitle: string = 'Running';
  descText: string = 'Upcoming races and past results';
  raceList: Race[];
  listExpanded: boolean;
  filterText: string;
  initialLength: number =  5;

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
      let filteredRaceList = new RaceFilterPipe().transform(this.raceList, this.filterText);

      return this.initialLength < filteredRaceList.length;
    }
  }
}
