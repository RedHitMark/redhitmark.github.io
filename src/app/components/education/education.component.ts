import {Component, Input} from '@angular/core';
import {Education} from '../../model/Education';

@Component({
  selector: 'app-education',
  styleUrl: './education.component.scss',
  templateUrl: './education.component.html',
  standalone: true,
})
export class EducationComponent {
  @Input() education!: Education;
}
