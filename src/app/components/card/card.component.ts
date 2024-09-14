import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BooksList } from '../../models/books-list';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnChanges {
  @Input() item!: BooksList;
  coverId: number | null = null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      this.coverId = this.item.cover_id
    }
  }
}
