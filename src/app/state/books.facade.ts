import { Store } from "@ngrx/store";
import { BooksActions, BooksApiActions } from "./books.actions";
import { selectBookCollection, selectBooks } from "./books.selector";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from '../core/book-list/book.model';

@Injectable()
export class BooksFacade {
    books$: Observable<ReadonlyArray<Book>>;
    bookCollection$: Observable<Array<Book>>;

    constructor(private store: Store) {
        this.books$ = this.store.select(selectBooks);
        this.bookCollection$ = this.store.select(selectBookCollection);
    }

    addBook(bookId: string) {
        this.store.dispatch(BooksActions.addBook({ bookId }));
    }

    removeBook(bookId: string) {
        this.store.dispatch(BooksActions.removeBook({ bookId }));
    }

    retrieveBookList(books: ReadonlyArray<Book>) {
        this.store.dispatch(BooksApiActions.retrieveBookList({ books }));
    }
}