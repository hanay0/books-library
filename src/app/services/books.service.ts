import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BooksList } from '../models/books-list';
import { Author } from '../models/books-list';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly baseURL: string = "https://openlibrary.org/subjects/finance.json"

  constructor(private http: HttpClient) { }

  getList(): Observable<BooksList[]> {
    return this.http.get<{ works: { cover_id: number; first_publish_year: number; authors: Author[] }[] }>(this.baseURL).pipe(
      map(response => response.works.slice(0, 9).map((book: { cover_id: number; first_publish_year: number; authors: Author[] }) => ({
        cover_id: book.cover_id,
        first_publish_year: book.first_publish_year,
        author_name: book.authors.map((author: Author) => author.name)
      })))
    );
  }
}
