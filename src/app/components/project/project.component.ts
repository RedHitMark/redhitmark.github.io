import {Component, Input} from '@angular/core';
import {Project} from '../../model/Project';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-project',
  styleUrl: './project.component.scss',
  templateUrl: './project.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],

})
export class ProjectComponent {
  @Input() project!: Project;
}
