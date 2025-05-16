import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeamService } from '../services/team/team.service';
import { Team } from '../services/interfaces/team';
import { Player } from '../services/interfaces/player';
import { enviroment } from '../../enviroment/enviroment';

@Component({
  selector: 'app-team-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.scss'
})
export class TeamInfoComponent implements OnInit {
  team: Team | undefined;
  players: Player[] = [];

  constructor(private route: ActivatedRoute, private teamService: TeamService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.teamService.loadTeams(); 
    this.teamService.getTeamPlayers(slug).subscribe((players) => {
      this.players = players;
    });

    this.teamService.teams$.subscribe((teams) => {
      this.team = teams.find(team => team.slug === slug);
    });
  }
  getCleanImageUrl(imageUrl: string): string {
  return imageUrl.replace(/_[a-zA-Z0-9]+(?=\.)/, '');
}
  protected readonly enviroment = enviroment;

}
