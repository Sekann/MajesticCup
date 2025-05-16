import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {enviroment} from '../../../enviroment/enviroment';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor(private http: HttpClient) { }

  login(user:User) {
    return this.http.post<any>(`${enviroment.apiUrl}/usuarios/login`, user);
  }
}
