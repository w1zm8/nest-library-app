import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Book, BookStatus } from './book.model';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  getAllBooks(): Book[] {
    return this.books;
  }

  createBook({ title, description, year, author }: CreateBookDto): Book {
    const book: Book = {
      id: uuid(),
      title,
      description,
      year,
      author,
      status: BookStatus.ON_SHELF,
    };
    this.books.push(book);
    return book;
  }
}
