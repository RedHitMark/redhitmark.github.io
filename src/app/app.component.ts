import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ]
})
export class AppComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
  }
}
