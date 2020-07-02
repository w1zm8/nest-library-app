import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Book, BookStatus } from './book.model';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  getAllBooks(): Book[] {
    return this.books;
  }

  getFilteredBooks({ search, year, status }: GetBooksFilterDto): Book[] {
    let books = this.getAllBooks();

    if (search) {
      const searchStr = search.toLowerCase();
      books = books.filter(
        book =>
          book.title.toLowerCase().includes(searchStr) ||
          book.description.toLowerCase().includes(searchStr) ||
          book.author.toLowerCase().includes(searchStr),
      );
    }

    if (year) {
      books = books.filter(book => book.year === year);
    }

    if (status) {
      books = books.filter(book => book.status === status);
    }

    return books;
  }

  getBookById(id: string): Book {
    const book = this.books.find(book => book.id === id);

    if (!book) {
      // returns response with 404 not found
      throw new NotFoundException(`Book with id = '${id}' not found`);
    }

    return book;
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

  deleteBookById(id: string): void {
    // this method is using for checking does book exist or not with this id
    // if book does not exist we throw Not Found Exception (see getBookById method)
    // Nest returns response with 404 not found
    const foundBook = this.getBookById(id);
    this.books = this.books.filter(book => book.id !== foundBook.id);
  }

  updateBookById(id: string, updateBookDto: UpdateBookDto): Book {
    const index = this.books.findIndex(book => book.id === id);
    const book = {
      ...this.books[index],
      ...updateBookDto,
    };

    this.books[index] = book;

    return book;
  }
}
