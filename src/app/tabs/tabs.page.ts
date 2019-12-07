import { Component } from '@angular/core';
import { HeaderLink } from '../model/header-link';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  headerLinks: HeaderLink[] = [
    new HeaderLink('https://www.linkedin.com/in/paulbanel/', 'linkedin'),
    new HeaderLink('https://www.github.com/ultrapabs/', 'github'),
    new HeaderLink('https://www.instagram.com/ultrapabs/', 'instagram')
  ];

  constructor() { }

}
