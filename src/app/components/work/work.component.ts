import {Component, Input} from '@angular/core';
import {Work} from '../../model/Work';

@Component({
  selector: 'app-work',
  styleUrl: './work.component.scss',
  templateUrl: './work.component.html',
  standalone: true,
})
export class WorkComponent {
  @Input() work!: Work;
}
