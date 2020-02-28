import { Pipe, PipeTransform } from '@angular/core';
import { empty } from 'rxjs';
import {IBook} from './book.model'
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(books: Array<any>, filterTerm:string): IBook[] {
    if(!books)
      return [];
    if(!filterTerm)
      return books;
    return books.filter(book => book.originalTitle.toLowerCase().includes(filterTerm));
  }

}
