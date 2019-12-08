import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Project } from '../model/project';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  pageTitle: string = 'Projects';
  descText: string = 'Some past projects I\'ve created';
  projectList: Project[];

  constructor(
    private platform: Platform,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.projectList = this.projectService.getProjects();
  }

  isMobile() {
    return this.platform.is('mobile');
  }

}
