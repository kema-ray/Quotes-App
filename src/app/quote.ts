export class Quote {
    showQuote: boolean;
    constructor(
        public id: number,
        public author: string,
        public quote: string,
        public upvote: number,
        public downvote: number
        // public person: string
    ){
        this.showQuote=false;
    }
}
