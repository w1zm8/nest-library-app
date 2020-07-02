import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.model';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { GetBooksFilterDto } from './dto/get-books-filter.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getBooks(@Query() filterDto: GetBooksFilterDto): Book[] {
    // if request as /books?search=smth
    if (Object.keys(filterDto).length) {
      return this.booksService.getFilteredBooks(filterDto);
    }

    // w/o any query params
    return this.booksService.getAllBooks();
  }

  @Get('/:id')
  getBookById(@Param('id') id: string): Book {
    return this.booksService.getBookById(id);
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
  @UsePipes(ValidationPipe) // using validation, field's validation is described in DTO class (CreateBookDto)
  createBook(@Body() createBookDto: CreateBookDto): Book {
    return this.booksService.createBook(createBookDto);
  }

  @Delete('/:id')
  deleteBookById(@Param('id') id: string): void {
    this.booksService.deleteBookById(id);
  }

  @Post('/:id')
  updateBookById(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Book {
    return this.booksService.updateBookById(id, updateBookDto);
  }
}
