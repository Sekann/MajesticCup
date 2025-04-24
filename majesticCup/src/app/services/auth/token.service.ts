import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {enviroment} from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly ACCESS_TOKEN_KEY = 'access_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';

  constructor(private cookieService:CookieService) { }

  savetokens(accessToken: string, refreshToken: string) {
    this.cookieService.set(this.ACCESS_TOKEN_KEY, accessToken, {
      path:"/",
      secure: enviroment.tokenSecure,
      sameSite: 'Strict',
    });
    this.cookieService.set(this.REFRESH_TOKEN_KEY, refreshToken, {
      path:"/",
      secure: enviroment.tokenSecure,
      sameSite: 'Strict',
    });
  }

  getAccessToken() {
    return this.cookieService.get(this.ACCESS_TOKEN_KEY);
  }

  getRefreshToken() {
    return this.cookieService.get(this.REFRESH_TOKEN_KEY);
  }

  removeTokens() {
    this.cookieService.delete(this.ACCESS_TOKEN_KEY);
    this.cookieService.delete(this.REFRESH_TOKEN_KEY);
  }
}
