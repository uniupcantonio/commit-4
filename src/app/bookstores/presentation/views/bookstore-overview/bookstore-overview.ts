import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Bookstore Overview view with the inventory of each bookstore.
 * @author Carlos Céspedes
 */
@Component({
  selector: 'app-bookstore-overview',
  imports: [TranslatePipe],
  templateUrl: './bookstore-overview.html',
  styleUrl: './bookstore-overview.css',
})
export class BookstoreOverview {}
