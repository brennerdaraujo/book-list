import { Store } from "@ngrx/store";
import { BooksActions, BooksApiActions } from "./books.actions";
import { selectBookCollection, selectBooks } from "./books.selector";
import { Injectable, Signal } from "@angular/core";
import { Book } from '../core/book-list/book.model';

@Injectable()
export class BooksFacade {
    books: Signal<ReadonlyArray<Book>>;
    bookCollection: Signal<Array<Book>>;

    constructor(private store: Store) {
        this.books = this.store.selectSignal(selectBooks);
        this.bookCollection = this.store.selectSignal(selectBookCollection);
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