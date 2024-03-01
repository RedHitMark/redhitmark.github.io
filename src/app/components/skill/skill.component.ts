import {Component, Input} from '@angular/core';
import {Skill} from '../../model/Skill';

@Component({
  selector: 'app-skill',
  styleUrl: './skill.component.scss',
  templateUrl: './skill.component.html',
  standalone: true,

})
export class SkillComponent {
  @Input() skill!: Skill;
}
