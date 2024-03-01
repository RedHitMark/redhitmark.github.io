import {Component, Input} from '@angular/core';
import {Certification} from '../../model/Certification';

@Component({
  selector: 'app-certification',
  styleUrl: './certification.component.scss',
  templateUrl: './certification.component.html',
  standalone: true,
  imports: [],
})
export class CertificationComponent {
  @Input() certification!: Certification;

}
