import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {enviroment} from '../../../enviroment/enviroment';
import {Banning} from '../interfaces/banning';

@Injectable({
  providedIn: 'root'
})
export class BanningWheelService {

  constructor(private http : HttpClient) { }

  banHeros(slug: string) {
    return this.http.get<Banning>(`${enviroment.apiUrl}/partidas/ruleta-eliminadora/${slug}`);
  }
}
