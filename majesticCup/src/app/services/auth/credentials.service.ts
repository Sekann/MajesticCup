import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {enviroment} from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${enviroment.apiUrl}/login`, {username, password});
  }
}
