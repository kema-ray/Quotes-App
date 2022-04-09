import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Black Panther', 'Quote-Wakanda Forever',0,0),
    new Quote(2, 'Stephen King', 'Quote-Get busy living or get busy dying',0,0),
    new Quote(3, 'Albert Eisten', 'If you want to live a happy life, tie it to a goal',0,0),
    new Quote(4, 'Bill Gates', 'Information technology and business are becoming inextricably interwoven. I do not think anybody can talk meaningfully about one without the talking about the other',0,0)
  ]

  showMore(index){
    this.quotes[index].showQuote = !this.quotes[index].showQuote
  }

  constructor() { }

  ngOnInit(): void {
  }

}
