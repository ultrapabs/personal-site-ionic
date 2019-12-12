import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ProjectsPage } from './projects.page';
import { Platform } from '@ionic/angular';
import { ProjectService } from '../service/project.service';

describe('ProjectsPage', () => {
  let component: ProjectsPage;
  let fixture: ComponentFixture<ProjectsPage>;
  let platformSpy, projectServiceSpy;

  beforeEach(async(() => {
    platformSpy = jasmine.createSpyObj('Platform', ['is']);
    projectServiceSpy = jasmine.createSpyObj('ProjectService', ['getProjects']);

    TestBed.configureTestingModule({
      declarations: [ProjectsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Platform, useValue: platformSpy },
        { provide: ProjectService, useValue: projectServiceSpy }
      ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('gets the project list on init', () => {
    component.ngOnInit();
    expect(projectServiceSpy.getProjects).toHaveBeenCalled();
  });

  it('knows if the app is loaded in mobile', () => {
    component.isMobile();
    expect(platformSpy.is).toHaveBeenCalledWith('mobile');
  });
});
