import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { RedirectService } from '../service/redirect.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  pageTitle: string = 'Paul Banel';
  descText: string = 'I am an ultra runner and software developer based in Boulder, CO';
  isMobile: boolean;

  constructor(
    private platform: Platform,
    private redirectService: RedirectService
  ) {}

  ngOnInit() {
    this.isMobile = this.platform.is('mobile');
    this.redirectService.checkUrlAndRedirect();
  }

}
