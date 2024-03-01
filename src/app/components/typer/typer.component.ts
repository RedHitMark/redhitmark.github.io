import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-typer',
  styleUrl: './typer.component.scss',
  templateUrl: './typer.component.html',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
})
export class TyperComponent implements AfterViewInit, OnDestroy {
  @Input() strings!: string[];

  currentStringIndex: number = 0;
  currentLetterIndex: number = 0;
  isDeleting: boolean = false;

  public typerOutput: string = '';

  private timer: any;

  public ngAfterViewInit(): void {
    this.timer = setInterval(() => {
      this.type();
    }, 100);
  }

  public ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  private type(): void {
    if (this.currentStringIndex >= this.strings.length) {
      this.currentStringIndex = 0;
    }

    const currentString = this.strings[this.currentStringIndex];

    if (this.isDeleting) {
      this.typerOutput = currentString.slice(0, this.currentLetterIndex);
      this.currentLetterIndex--;
    } else {
      this.typerOutput = currentString.slice(0, this.currentLetterIndex);
      this.currentLetterIndex++;
    }

    if (this.currentLetterIndex > currentString.length) {
      this.isDeleting = true;
    }

    if (this.currentLetterIndex <= 0) {
      this.isDeleting = false;
      this.currentStringIndex++;
    }
  }
}
