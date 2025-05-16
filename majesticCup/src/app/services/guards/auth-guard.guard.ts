import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {TokenService} from '../auth/token.service';
import {HttpClient} from '@angular/common/http';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService)
  const router = inject(Router)
  const http = inject(HttpClient)

  const accessToken = tokenService.getAccessToken();

  if(!accessToken) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
