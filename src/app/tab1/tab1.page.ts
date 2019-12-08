import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pageTitle: string = 'Paul Banel';
  descText: string = 'I am an ultra runner and software developer based in Boulder, CO';

  constructor(private platform: Platform) {}

  isMobile() {
    return this.platform.is('mobile');
  }

}
