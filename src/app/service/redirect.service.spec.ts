import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RedirectService } from './redirect.service';

describe('RedirectService', () => {
  let routerSpy, mockActivatedRoute;

  beforeEach( () => {
    mockActivatedRoute = {
      snapshot: {
        queryParamMap: {
          get: () => { return 'test'; }
        }
      }
    }
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: routerSpy },
        RedirectService
      ]
    });
  });

  it('should be created', () => {
    const service: RedirectService = TestBed.get(RedirectService);
    expect(service).toBeTruthy();
    expect(service.alreadyRedirected).toBe(false);
  });

  it('checks the url parameters and redirects if a valid route', () => {
    const service: RedirectService = TestBed.get(RedirectService);
    spyOn(service, 'isValidRoute').and.returnValue(true);

    service.checkUrlAndRedirect();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/test']);
    expect(service.alreadyRedirected).toBe(true);
  });

  it('checks the url parameters and does not redirect if an invalid route', () => {
    const service: RedirectService = TestBed.get(RedirectService);
    spyOn(service, 'isValidRoute').and.returnValue(false);

    service.checkUrlAndRedirect();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
    expect(service.alreadyRedirected).toBe(false);
  });

  it('does not check the url parameters or redirect if a redirect has already happened', () => {
    const service: RedirectService = TestBed.get(RedirectService);
    service.alreadyRedirected = true;

    service.checkUrlAndRedirect();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('knows if a redirect path is valid', () => {
    const service: RedirectService = TestBed.get(RedirectService);

    expect(service.isValidRoute('home')).toBe(true);
    expect(service.isValidRoute('running')).toBe(true);
    expect(service.isValidRoute('projects')).toBe(true);
    expect(service.isValidRoute('pizza')).toBe(false);
    expect(service.isValidRoute('test')).toBe(false);
  });
});
