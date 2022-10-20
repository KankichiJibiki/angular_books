import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor() { }

  getBooks() {
    return [
      {
        name:  'Clean Code',
        author:  'Kankichi Jibiki',
        image:  'https://m.media-amazon.com/images/I/815-YeanKGL.jpg',
        amount: 1200,
      },
      {
        name:  'Kyosha',
        author:  'Mikuru Asakura',
        image:  'https://m.media-amazon.com/images/I/419egoQCbnL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
        amount: 1500,
      },
    ]
  }
}
