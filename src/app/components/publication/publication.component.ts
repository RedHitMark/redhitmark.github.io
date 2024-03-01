import {Component, Input} from '@angular/core';
import {Publication} from '../../model/Publication';

@Component({
  selector: 'app-publication',
  styleUrl: './publication.component.scss',
  templateUrl: './publication.component.html',
  standalone: true,

})
export class PublicationComponent {
  @Input() publication!: Publication;
}
