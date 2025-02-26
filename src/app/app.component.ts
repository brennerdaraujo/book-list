import { Component } from '@angular/core';
import { BookListComponent } from "./book-list/book-list.component";
import { BookCollectionComponent } from "./book-collection/book-collection.component";
import { GoogleBooksService } from './core/book-list/books.service';
import { BooksFacade } from './state/books.facade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    BookCollectionComponent,
    BookListComponent,
    CommonModule,
  ],
  providers: [BooksFacade],
})
export class AppComponent {
  constructor(
    public booksFacade: BooksFacade,
    private booksService: GoogleBooksService,
  ) { }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.booksFacade.retrieveBookList(books),
      );
  }

  onAdd(bookId: string) {
    this.booksFacade.addBook(bookId);
  }

  onRemove(bookId: string) {
    this.booksFacade.removeBook(bookId);
  }
}
