import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { HlctFktPage } from './hlct-fkt.page';
import { ApiService } from '../service/api.service';
import { MockApiService } from '../service/api.service.spec';
import { Platform } from '@ionic/angular';

describe('HlctFktPage', () => {
  let component: HlctFktPage;
  let fixture: ComponentFixture<HlctFktPage>;
  let platformSpy, apiService;


  beforeEach(async(() => {
    platformSpy = jasmine.createSpyObj('Platform', ['is']);
    apiService = new MockApiService();

    TestBed.configureTestingModule({
      declarations: [HlctFktPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Platform, useValue: platformSpy },
        { provide: ApiService, useValue: apiService }
      ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HlctFktPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('intializes the page correctly', () => {
    spyOn(component, 'loadPaths');
    spyOn(component, 'loadAidMarkers');
    component.ngOnInit();

    expect(platformSpy.is).toHaveBeenCalledWith('mobile');
    expect(component.originalFktPointList.length).toBe(0);
    expect(component.detourFktPointList.length).toBe(0);
    expect(component.detourOnePointList.length).toBe(0);
    expect(component.detourTwoPointList.length).toBe(0);
    expect(component.detourThreePointList.length).toBe(0);
    expect(component.aidMarkerList.length).toBe(0);
    expect(component.showOriginalFkt).toBe(true);
    expect(component.showDetourFkt).toBe(true);
    expect(component.showDetour).toBe(true);
    expect(component.showMarkers).toBe(true);
    expect(component.loadPaths).toHaveBeenCalled();
    expect(component.loadAidMarkers).toHaveBeenCalled();
  });

  it('loads the paths from json files', () => {
    spyOn(component, 'loadOriginalFkt');
    spyOn(component, 'loadDetourFkt');
    spyOn(component, 'loadDetour');

    component.loadPaths();
    expect(component.loadOriginalFkt).toHaveBeenCalled();
    expect(component.loadDetourFkt).toHaveBeenCalled();
    expect(component.loadDetour).toHaveBeenCalled();
  });

  it('calls the api service to load the original fkt route and handles a success response', () => {
    let testPointList = [
      { "lat": 12, "lng": -12 },
      { "lat": 13, "lng": -13 },
      { "lat": 14, "lng": -14 }
    ];
    let testResponse = {
      pointList: testPointList
    };
    spyOn(apiService, 'getJsonData').and.returnValue(of(testResponse));

    component.loadOriginalFkt();
    expect(apiService.getJsonData).toHaveBeenCalledWith('hlct_fkt');
    expect(component.originalFktPointList).toBe(testPointList);
  });

  it('calls the api service to load the original fkt route and handles an error response', () => {
    let testResponse = 'some error';
    spyOn(apiService, 'getJsonData').and.returnValue(throwError(testResponse));
    spyOn(console, 'error');

    component.loadOriginalFkt();
    expect(apiService.getJsonData).toHaveBeenCalledWith('hlct_fkt');
    expect(console.error).toHaveBeenCalledWith(testResponse);
  });

  it('calls the api service to load the detour fkt route and handles a success response', () => {
    let testPointList = [
      { "lat": 12, "lng": -12 },
      { "lat": 13, "lng": -13 },
      { "lat": 14, "lng": -14 }
    ];
    let testResponse = {
      pointList: testPointList
    };
    spyOn(apiService, 'getJsonData').and.returnValue(of(testResponse));

    component.loadDetourFkt();
    expect(apiService.getJsonData).toHaveBeenCalledWith('hlct_with_detour');
    expect(component.detourFktPointList).toBe(testPointList);
  });

  it('calls the api service to load the detour fkt route and handles an error response', () => {
    let testResponse = 'some error';
    spyOn(apiService, 'getJsonData').and.returnValue(throwError(testResponse));
    spyOn(console, 'error');

    component.loadDetourFkt();
    expect(apiService.getJsonData).toHaveBeenCalledWith('hlct_with_detour');
    expect(console.error).toHaveBeenCalledWith(testResponse);
  });

  it('calls the api service to load the detour segments and handles a success response', () => {
    let testPointListOne = [
      { "lat": 12, "lng": -12 },
      { "lat": 13, "lng": -13 },
      { "lat": 14, "lng": -14 }
    ];
    let testPointListTwo = [
      { "lat": 15, "lng": -15 },
      { "lat": 16, "lng": -16 },
      { "lat": 17, "lng": -17 }
    ];
    let testPointListThree = [
      { "lat": 18, "lng": -18 },
      { "lat": 19, "lng": -19 },
      { "lat": 20, "lng": -20 }
    ];
    let testResponse = {
      pointListOne: testPointListOne,
      pointListTwo: testPointListTwo,
      pointListThree: testPointListThree
    };
    spyOn(apiService, 'getJsonData').and.returnValue(of(testResponse));

    component.loadDetour();
    expect(apiService.getJsonData).toHaveBeenCalledWith('detour_only');
    expect(component.detourOnePointList).toBe(testPointListOne);
    expect(component.detourTwoPointList).toBe(testPointListTwo);
    expect(component.detourThreePointList).toBe(testPointListThree);
  });

  it('calls the api service to load the detour segments and handles an error response', () => {
    let testResponse = 'some error';
    spyOn(apiService, 'getJsonData').and.returnValue(throwError(testResponse));
    spyOn(console, 'error');

    component.loadDetour();
    expect(apiService.getJsonData).toHaveBeenCalledWith('detour_only');
    expect(console.error).toHaveBeenCalledWith(testResponse);
  });

  it('calls the api service to load the aid stations and handles a success response', () => {
    let testAidStationList = [
      {
        "lat": 12,
        "lng": -12,
        "title": "Test",
        "label": "T",
        "zIndex": 1,
        "mile": 2,
        "toNext": 3,
        "desc": "Some description",
        "googleMapLink": "some.url"
      }
    ];
    let testResponse = {
      stations: testAidStationList
    };
    spyOn(apiService, 'getJsonData').and.returnValue(of(testResponse));

    component.loadAidMarkers();
    expect(apiService.getJsonData).toHaveBeenCalledWith('aid_station');
    expect(component.aidMarkerList).toBe(testAidStationList);
  });

  it('calls the api service to load the aid stations and handles an error response', () => {
    let testResponse = 'some error';
    spyOn(apiService, 'getJsonData').and.returnValue(throwError(testResponse));
    spyOn(console, 'error');

    component.loadAidMarkers();
    expect(apiService.getJsonData).toHaveBeenCalledWith('aid_station');
    expect(console.error).toHaveBeenCalledWith(testResponse);
  });

  it('toggles showing the original fkt route', () => {
    component.showOriginalFkt = true;

    component.toggleOriginalFkt();
    expect(component.showOriginalFkt).toBe(false);
    component.toggleOriginalFkt();
    expect(component.showOriginalFkt).toBe(true);
  });

  it('toggles showing the detour fkt route', () => {
    component.showDetourFkt = true;

    component.toggleDetourFkt();
    expect(component.showDetourFkt).toBe(false);
    component.toggleDetourFkt();
    expect(component.showDetourFkt).toBe(true);
  });

  it('toggles showing the detour segments', () => {
    component.showDetour = true;

    component.toggleDetour();
    expect(component.showDetour).toBe(false);
    component.toggleDetour();
    expect(component.showDetour).toBe(true);
  });

  it('toggles showing the aid stations', () => {
    component.showMarkers = true;

    component.toggleMarkers();
    expect(component.showMarkers).toBe(false);
    component.toggleMarkers();
    expect(component.showMarkers).toBe(true);
  });
});
