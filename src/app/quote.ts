export class Quote {
    showQuote: boolean;
    constructor(
        public id: number,
        public name: string,
        public author: string,
        public quote: string,
        // public publishDate: Date,
        public upvote: number,
        public downvote: number
        // public person: string
    ){
        this.showQuote=false;
    }
}
