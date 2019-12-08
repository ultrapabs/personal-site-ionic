import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { RedirectService } from '../service/redirect.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  pageTitle: string = 'Paul Banel';
  descText: string = 'I am an ultra runner and software developer based in Boulder, CO';

  constructor(
    private platform: Platform,
    private redirectService: RedirectService
  ) {}

  ngOnInit() {
    this.redirectService.checkUrlAndRedirect();
  }

  isMobile() {
    return this.platform.is('mobile');
  }

}
