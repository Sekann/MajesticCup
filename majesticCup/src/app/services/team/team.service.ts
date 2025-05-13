import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { Team } from '../interfaces/team';
import { Game } from '../interfaces/game';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private API_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<{ success: string, data: Team[] }>(`${this.API_URL}/equipos/getAll`)
      .pipe(map(response => response.data));
  }

  getTeamBySlug(slug: string): Observable<{ team: Team; players: Player[] }> {
    const team$ = this.http.get<Team>(`${this.API_URL}/equipos/${slug}`);
    const players$ = this.http.get<Player[]>(`${this.API_URL}/jugadores/info/${slug}`);
  
    return forkJoin({ team: team$, players: players$ }); 
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.API_URL}/partidas`);
  }
}
