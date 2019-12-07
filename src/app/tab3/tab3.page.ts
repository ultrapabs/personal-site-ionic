import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Project } from '../model/project';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  pageTitle: string = 'Projects';
  projectList: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectList = this.projectService.getProjects();
  }

}
