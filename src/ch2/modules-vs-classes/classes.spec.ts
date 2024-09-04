
import { Book } from './classes';

describe('Classes', () => {
  it('instantiates classes', () => {
    var x = new Book(
      { 
        title: 'Title',
        author: 'author',
        publishedOn: new Date(),
        publisher: 'publisher',
        ISBN: 'ISBN' 
      });
    expect(x.getDetails()).toBe(`Title: Title\n            By: author\n            ${new Date()}\n            Publisher: publisher\n            ISBN: ISBN`);
  });
})