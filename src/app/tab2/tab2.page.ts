import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { RaceService } from '../service/race.service';
import { Race } from '../model/race';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pageTitle: string = 'Running';
  descText: string = 'Upcoming races and past results';
  raceList: Race[];
  showMore: boolean;

  constructor(
    private platform: Platform,
    private raceService: RaceService
  ) {}

  ngOnInit() {
    this.raceList = this.raceService.getRaces();
    this.showMore = false;
  }

  isMobile() {
    return this.platform.is('mobile');
  }

  expandList() {
    this.showMore = true;
  }
}
