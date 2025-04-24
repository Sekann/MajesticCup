import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Team } from '../services/interfaces/team';
import { Router } from '@angular/router';
import { TeamService } from '../services/team/team.service';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  teams: Team[] = [];

  constructor(private router: Router, private teamService: TeamService) {
    this.teams = this.teamService.getTeams();
  }

  goToTeamInfo(slug: string) {
    this.router.navigate(['/equipo', slug]);
  }
}
