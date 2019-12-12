import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  allowedRoutes: string[] = [
    'home',
    'projects',
    'running'
  ];
  alreadyRedirected: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.alreadyRedirected = false;
  }

  checkUrlAndRedirect() {
    // NOTE: bandaid fix, the following code does not actually remove the queryParams as docs suggest
    // this.router.navigate(['/' + redirectPath], {
    //   queryParams: { redirect: null },
    //   queryParamsHandling: 'merge'
    // });
    if (!this.alreadyRedirected) {
      let redirectPath = this.activatedRoute.snapshot.queryParamMap.get('redirect');

      if (this.isValidRoute(redirectPath)) {
        this.alreadyRedirected = true;
        this.router.navigate(['/' + redirectPath]);
      }
    }
  }

  isValidRoute(redirectPath: string) {
    return redirectPath != null && this.allowedRoutes.indexOf(redirectPath) > -1;
  }
}
