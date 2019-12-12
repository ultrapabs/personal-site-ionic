import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { RunningPage } from './running.page';
import { Platform } from '@ionic/angular';
import { RaceService } from '../service/race.service';
import { RaceFilterPipe } from '../pipe/race-filter.pipe';
import { Race } from '../model/race';

describe('RunningPage', () => {
  let component: RunningPage;
  let fixture: ComponentFixture<RunningPage>;
  let platformSpy, raceServiceSpy;

  beforeEach(async(() => {
    platformSpy = jasmine.createSpyObj('Platform', ['is']);
    raceServiceSpy = jasmine.createSpyObj('RaceService', {'getRaces': []});

    TestBed.configureTestingModule({
      declarations: [RunningPage, RaceFilterPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Platform, useValue: platformSpy },
        { provide: RaceService, useValue: raceServiceSpy }
      ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RunningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets up the page correctly on init', () => {
    component.ngOnInit();
    expect(raceServiceSpy.getRaces).toHaveBeenCalled();
    expect(component.listExpanded).toBe(false);
    expect(component.filterText).toBe(null);
  });

  it('expands the race list', () => {
    component.listExpanded = false;
    component.expandList();
    expect(component.listExpanded).toBe(true);
  });

  it('knows when to show the show more button', () => {
    let testFilteredList = [
      new Race('', '', '', ''),
      new Race('', '', '', ''),
      new Race('', '', '', '')
    ];
    component.listExpanded = true;
    expect(component.showShowMore()).toBe(false);
    component.listExpanded = false;
    spyOn(component.raceFilterPipe, 'transform').and.returnValue(testFilteredList);
    component.initialLength = 4;
    expect(component.showShowMore()).toBe(false);
    component.initialLength = 2;
    expect(component.showShowMore()).toBe(true);
  });

  it('knows when the app is loaded in mobile', () => {
    component.isMobile();
    expect(platformSpy.is).toHaveBeenCalledWith('mobile');
  });
});
