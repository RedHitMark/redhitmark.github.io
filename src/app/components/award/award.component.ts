import {Component, Input} from '@angular/core';
import {Award} from '../../model/Award';

@Component({
  selector: 'app-award',
  styleUrl: './award.component.scss',
  templateUrl: './award.component.html',
  standalone: true,
  imports: [],
})
export class AwardComponent {
  @Input() award!: Award;

}
