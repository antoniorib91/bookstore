import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {

  public books: Array<Book> = [
    {
      name: 'I Am Enough',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51AbnWTJ5nL._SX258_BO1,204,203,200_.jpg',
      price: 13.28,
      description: 'This gorgeous, lyrical ode to loving who you are, respecting others, and being kind to one another comes from Empire actor and activist Grace Byers and talented newcomer artist Keturah A. Bobo.'
    },
    {
      name: 'I Love You to the Moon and Back',
      image: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
      price: 5.35,
      description: 'The sun rises, and a bear and cub begin their day together. They splash in the water, climb mountains, and watch the shimmering sky. They show their love by touching noses, playing chase, and of course, hugging. A sweet, gentle rhyme, perfect for sharing with a special little one!'
    }
  ];

  constructor() { }

  ngOnInit(): void {}



}
