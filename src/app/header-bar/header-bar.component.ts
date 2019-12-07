import { Component, Input } from '@angular/core';
import { HeaderLink } from '../model/header-link';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent {

  @Input() pageTitle: string;
  headerLinks: HeaderLink[] = [
    new HeaderLink('https://www.linkedin.com/in/paulbanel/', 'linkedin'),
    new HeaderLink('https://www.github.com/ultrapabs/', 'github'),
    new HeaderLink('https://www.instagram.com/ultrapabs/', 'instagram')
  ];

  constructor() { }

}
