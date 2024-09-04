export class Publication {
  private title: string;
  private author: string;
  private pubDate: Date;

  constructor(title: string, author: string, pubDate: Date) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }

  print() {
    console.log(`
            Title: ${this.title}
            By: ${this.author}
            ${this.pubDate}
        `);
  }

  getDetails() {
    return `Title: ${this.title}
            By: ${this.author}
            ${this.pubDate}`;
  }
}

export class Book extends Publication {
  private publisher: string;
  private ISBN: string;

  constructor(bookDetails: { title: string, author: string, publishedOn: Date, publisher: string, ISBN: string }) {
    super(
      bookDetails.title,
      bookDetails.author,
      bookDetails.publishedOn
    );
    this.publisher = bookDetails.publisher;
    this.ISBN = bookDetails.ISBN;
  }

  print() {
    super.print();
    console.log(`
            Publisher: ${this.publisher}
            ISBN: ${this.ISBN}
        `);
  }

  getDetails(): string {
    return `${super.getDetails()}
            Publisher: ${this.publisher}
            ISBN: ${this.ISBN}`;
  }
}

export class BlogPost extends Publication {
  private URL: URL;
  constructor(title: string, author: string, pubDate: Date, URL: URL) {
    super(title, author, pubDate);
    this.URL = URL;
  }

  print() {
    super.print();
    console.log(this.URL);
  }
}
