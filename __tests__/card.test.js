import Card from './../src/card.js';

let card;
beforeEach(() => {
  card = new Card(5);
});

describe('Card', () => {

  test('create a Card instance with state and value', () => {
    expect(card.state).toEqual(false);
    expect(card.value).toEqual(5);
  });


});