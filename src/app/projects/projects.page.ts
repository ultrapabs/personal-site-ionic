import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Project } from '../model/project';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.page.html',
  styleUrls: ['projects.page.scss']
})
export class ProjectsPage implements OnInit {

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
