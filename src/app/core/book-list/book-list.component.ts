import { Component, input, output } from '@angular/core';
import { Book } from './book.model';

@Component({
    selector: 'app-core-book-list',
    templateUrl: './book-list.component.html',
})
export class CoreBookListComponent {
    title = input.required<string>();
    buttonText = input.required<string>();
    buttonColor = input<string>('primary');
    books = input<ReadonlyArray<Book>>([]);
    clickOnButton = output<string>();
}