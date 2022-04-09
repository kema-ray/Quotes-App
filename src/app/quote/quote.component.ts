import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Lupita Nyongo', 'Wakanda Forever',0,0),
    new Quote(2, 'Lupita Nyongo', 'Wakanda Forever',0,0),
    new Quote(3, 'Lupita Nyongo', 'Wakanda Forever',0,0)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
