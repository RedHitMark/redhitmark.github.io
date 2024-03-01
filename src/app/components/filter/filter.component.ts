import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-filter',
  styleUrl: './filter.component.scss',
  templateUrl: './filter.component.html',
  standalone: true,

  imports: [
    NgClass
  ]
})
export class FilterComponent {
  @Input() categories!: string[];
  @Input() selectedCategory: string;
  @Output() selectedCategoryChange = new EventEmitter<string>()


  constructor() {
    this.selectedCategory = 'all';
  }

  public selectCategory(category: string): void {
    this.selectedCategory = this.selectedCategory === category ? 'all' : category;
    this.selectedCategoryChange.emit(this.selectedCategory);
  }
}
