import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Lupita','Black Panther', 'Wakanda Forever',0,0,747,new Date(2020,3,14)),
    new Quote(2, 'Stephen King','Stephen King', 'Get busy living or get busy dying',0,0,70,new Date(2022,1,25)),
    new Quote(3, 'Albert Eisten','Albert Eisten', 'If you want to live a happy life, tie it to a goal',0,0,283,new Date(2021,6,14)),
    new Quote(4, 'Bill Gates','Bill Gates', 'Information technology and business are becoming inextricably interwoven. I do not think anybody can talk meaningfully about one without the talking about the other',0,0,365,new Date(2021,4,10))
  ]
  // preNum:number
  // lastNum:number
  // counter:number

  showMore(index){
    this.quotes[index].showQuote = !this.quotes[index].showQuote
  }
  upVoteQuote(index){
    // var up = this.quotes[index].upvote+1;
    this.quotes[index].upvote++;
  }
  // arr: number[] = this.quotes.map(quote=>quote.upvote)
  // highest = Math.max(...this.arr)
  downVoteQuote(index){
    // var down = this.quotes[index].downvote+1;
    this.quotes[index].downvote++;
  }

  preNum:number
  lastNum:number
  counter:number
  highestUpvote(){
    this.preNum = 0
    this.lastNum =0
    for(this.counter=0; this.counter < this.quotes.length;this.counter++){
      this.lastNum=this.quotes[this.counter].upvote;
      if(this.lastNum > this.preNum){
        this.preNum=this.lastNum
      }
      return this.preNum;
    }
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
