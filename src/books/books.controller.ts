import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.model';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  /** 
   * w/o using DTO
   * createBook(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('year') year: string,
        @Body('author') author: string,
    )
   * Body decorator for each parameter is like typed _.pick(response, ['title', 'description'...])
   */
  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Book {
    return this.booksService.createBook(createBookDto);
  }
}
