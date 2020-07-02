import { IsNotEmpty, IsNumberString, MaxLength } from 'class-validator';

// full description of Validation Decorators see on https://github.com/typestack/class-validator#samples

export class CreateBookDto {
  @IsNotEmpty() // Checks if given value is not empty (!== '', !== null, !== undefined)
  @MaxLength(100)
  title: string;
  @IsNotEmpty()
  @MaxLength(500)
  description: string;
  @IsNotEmpty()
  @IsNumberString()
  year: string;
  @IsNotEmpty()
  @MaxLength(100)
  author: string;
}
