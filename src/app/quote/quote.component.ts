import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Lupita','Black Panther', 'Quote-Wakanda Forever',0,0),
    new Quote(2, 'Stephen King','Stephen King', 'Quote-Get busy living or get busy dying',0,0),
    new Quote(3, 'Albert Eisten','Albert Eisten', 'If you want to live a happy life, tie it to a goal',0,0),
    new Quote(4, 'Bill Gates','Bill Gates', 'Information technology and business are becoming inextricably interwoven. I do not think anybody can talk meaningfully about one without the talking about the other',0,0)
  ]

  showMore(index){
    this.quotes[index].showQuote = !this.quotes[index].showQuote
  }
  deleteQuote(isComplete, index){
    if(isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
