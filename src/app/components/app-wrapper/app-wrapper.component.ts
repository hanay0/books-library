import { Component, OnInit } from '@angular/core';
import { ListComponent } from "../list/list.component";
import { BooksService } from '../../services/books.service';
import { BooksList } from '../../models/books-list';

@Component({
  selector: 'app-app-wrapper',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './app-wrapper.component.html',
  styleUrl: './app-wrapper.component.scss',
})
export class AppWrapperComponent implements OnInit {
  list!: any;
  
  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.bookService.getList().subscribe(res => {
      this.list = res
    })
  }
}
