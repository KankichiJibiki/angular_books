import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../types/Book'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book
  // @Output() bookEmitter = new EventEmitter<Book>();
  isInCart: boolean = false;

  constructor(private cartService: CartService) { }

   ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book)
  }

}
