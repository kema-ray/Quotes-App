export class Quote {
    showQuote: boolean;
    constructor(
        public id: number,
        public author: string,
        public quote: string,
        // public person: string
    ){
        this.showQuote=false;
    }
}
