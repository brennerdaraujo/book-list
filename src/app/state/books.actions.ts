import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../core/book-list/book.model';

export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
        'Add Book': props<{ bookId: string }>(),
        'Remove Book': props<{ bookId: string }>(),
    },
});

export const BooksApiActions = createActionGroup({
    source: 'Books API',
    events: {
        'Retrieve Book List': props<{ books: ReadonlyArray<Book> }>(),
    },
});