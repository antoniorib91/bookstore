import { BookState } from '../enums/book-state.enum';

export interface Book {
  id?: string;
  name?: string;
  price?: number;
  author?: string;
  description?: string;
  image?: string;
  state?: BookState;
}
