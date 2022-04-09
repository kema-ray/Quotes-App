export class Quotes {
    showDescription: boolean;
    constructor(
        public id: number,
        public author: string,
        public quote: string,
        public publishedDate: Date
    ){
        this.showDescription=false;
    }
}
