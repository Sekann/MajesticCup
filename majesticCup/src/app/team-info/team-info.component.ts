import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeamService } from '../services/team/team.service';
import { Team } from '../services/interfaces/team';

@Component({
  selector: 'app-team-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.scss'
})
export class TeamInfoComponent {
  team: Team | undefined;

  constructor(private route: ActivatedRoute, private teamService: TeamService) {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.team = this.teamService.getTeamBySlug(slug);
  }
}
