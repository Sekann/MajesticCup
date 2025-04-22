import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-draft',
  imports: [
    NgForOf
  ],
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.scss'
})
export class DraftComponent {
  equipo1 = new Array(5);
  equipo2 = new Array(5);

}
