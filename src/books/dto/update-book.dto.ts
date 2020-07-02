import { BookStatus } from '../book.model';

export class UpdateBookDto {
  title: string;
  description: string;
  year: string;
  author: string;
  status: BookStatus;
}
