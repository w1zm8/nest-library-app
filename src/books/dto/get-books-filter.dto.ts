import { BookStatus } from '../book.model';

export class GetBooksFilterDto {
  search: string;
  year: string;
  status: BookStatus;
}
