import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { of } from 'rxjs';

describe('ApiService', () => {

  let httpSpy;

  beforeEach( () => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpSpy },
        ApiService
      ]
    });
  });

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('calls the http client to get a json file', () => {
    const apiService: ApiService = TestBed.get(ApiService);
    let testFileName = 'someKey';

    apiService.getJsonData(testFileName);
    expect(httpSpy.get).toHaveBeenCalledWith(`/assets/json/${testFileName}.json`);

  });
});

export class MockApiService {

  constructor() { }

  // Used as stub to mock different API responses
  getJsonData(fileName: string) {
    fileName = null;

    return of({});
  }
}

export class MockHttpClient {

  constructor() { }

  get(url: string) {
    url = null;
  }
}
