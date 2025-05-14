import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Team } from '../interfaces/team';
import { Game } from '../interfaces/game';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private API_URL = 'http://localhost:8000/api';

  private teamsSubject = new BehaviorSubject<Team[]>([]);
  teams$ = this.teamsSubject.asObservable();

  private gamesSubject = new BehaviorSubject<Game[]>([]);
  games$ = this.gamesSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadTeams(): void {
    this.http.get<{ success: string, data: Team[] }>(`${this.API_URL}/equipos/getAll`)
      .pipe(map(response => response.data))
      .subscribe((teams) => {
        this.teamsSubject.next(teams);
      });
  }

  loadGames(): void {
    this.http.get<Game[]>(`${this.API_URL}/partidas`)
      .subscribe((games) => {
        this.gamesSubject.next(games);
      });
  }

  getTeamPlayers(slug: string): Observable<Player[]> {
    return this.http.get<{ success: Player[] }>(`${this.API_URL}/jugadores/info/${slug}`)
      .pipe(map(response => response.success));
  }
  getTeamBySlug(slug: string): Observable<Team> {
    return this.teams$.pipe(
      map(teams => teams.find(team => team.slug === slug) ?? {} as Team)
    );
  }
}
