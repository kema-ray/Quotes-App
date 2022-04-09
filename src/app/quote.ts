export class Quote {
    showQuote: boolean;
    constructor(
        public id: number,
        public author: string,
        public quote: string
    ){
        this.showQuote=false;
    }
}
