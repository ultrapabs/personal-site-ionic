import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  alreadyRedirected: boolean;

  allowedRoutes: string[] = [
    'home',
    'projects',
    'running'
  ];

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
      this.activatedRoute.queryParams.subscribe(params => {
        let redirectPath = params['redirect'];
        console.log('hi');
        console.log(params);
        console.log(redirectPath);
        if (redirectPath != null && this.allowedRoutes.indexOf(redirectPath) > -1) {
          this.router.navigate(['/' + redirectPath]);
          this.alreadyRedirected = true;
        }
      });
    }
  }
}
