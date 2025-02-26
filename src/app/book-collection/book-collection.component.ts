import { Component, input, output } from '@angular/core';
import { Book } from '../core/book-list/book.model';
import { CoreBookListComponent } from "../core/book-list/book-list.component";

@Component({
    selector: 'app-book-collection',
    templateUrl: './book-collection.component.html',
    imports: [CoreBookListComponent],
})
export class BookCollectionComponent {
    books = input<ReadonlyArray<Book>>([]);
    remove = output<string>();
}