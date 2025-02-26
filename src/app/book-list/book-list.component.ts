import { Component, input, output } from '@angular/core';
import { Book } from '../core/book-list/book.model';
import { CoreBookListComponent } from '../core/book-list/book-list.component';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    imports: [CoreBookListComponent],
})
export class BookListComponent {
    books = input<ReadonlyArray<Book>>([]);
    add = output<string>();
}
